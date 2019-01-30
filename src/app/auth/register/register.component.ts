import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';

import {AuthService} from '../auth.service';
import {CanComponentDeactivate} from '../../guards/can-activate-deactivate.service';
import {User} from '../../models/user';
import {Country} from '../../models/country';
import {Phones} from '../../models/phones';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, CanComponentDeactivate {
    // list of available client types
    clientTypes = ['individual', 'Corporate', 'Joint'];
    // set the default country of the client types drop down
    currentClientType = 'individual';
    // will be used to bind email with username
    emailUsername = '';
    // set countries for the dropdown
    countries: Country[];
    // will be used to show the correct confirmation to the user
    error = false;
    success = false;
    // will be used to store the error message if found
    errorMessage = '';
    // will be used to show duplicate username error
    duplicatedUsername = false;
    // will be used to show duplicate email error
    duplicatedEmail = false;
    // set the default country of the dropdown
    currentCountry = 'AL';
    dealingCode = '';
    // get the registration form using view child
    @ViewChild('f') form: NgForm;
    // the following will be used to store the client data to be send to the backend
    user: User;
    // the following will be used to store the phone number of the client
    phoneNo: Phones;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.getCountries().subscribe(data => {
            this.countries = data['countryCodes'];
            for (const country of this.countries) {
                if (country.country_code === this.currentCountry) {
                    this.dealingCode = country.dialling_code;
                }
            }
        });
    }

    onCountryChange(value) {
        for (const country of this.countries) {
            if (country.country_code === value) {
                this.dealingCode = country.dialling_code;
            }
        }
    }

    // register a new user
    onSignup() {
        this.user = new User();
        this.phoneNo = new Phones();
        this.phoneNo.phone_code = this.dealingCode;
        this.phoneNo.phone_number = this.form.value.contactData.phoneNumber;
        this.user.first_name = this.form.value.firstName;
        this.user.last_name = this.form.value.lastName;
        this.user.email = this.form.value.email;
        this.user.country = this.form.value.country;
        this.user.username = this.emailUsername;
        this.user.password = this.form.value.password;
        this.user.phone = this.phoneNo;
        this.user.client_type = this.form.value.clientType;
        this.authService.registerUser(this.user).subscribe(
            (response: any) => {
                if (response['data']) {
                    this.success = true;
                    this.form.onReset();
                    setTimeout(() => {
                        this.success = false;
                        const username = this.user.username;
                        const password = this.user.password;
                        this.authService.loginUser({username, password});
                    }, 2000);
                }
            },
            error => {
                this.error = true;
                this.duplicatedUsername = false;
                this.duplicatedEmail = false;
                if (error['error'].errors[0].errmsg.indexOf('username') !== -1) {
                    this.duplicatedUsername = true;
                    this.errorMessage = 'Existing username, please choose another one';
                    const usernameInput = document.getElementById('username');
                    usernameInput.classList.add('ng-invalid');
                    usernameInput.classList.remove('ng-valid');
                    this.form.form.patchValue({username: ''});
                }
                if (error['error'].errors[0].errmsg.indexOf('email') !== -1) {
                    this.duplicatedEmail = true;
                    this.errorMessage = 'Existing Email, please enter another one';
                    const emailInput = document.getElementById('email');
                    emailInput.classList.add('ng-invalid');
                    emailInput.classList.remove('ng-valid');
                    this.form.form.patchValue({email: ''});
                }
            }
        );
    }

    closeErrorMessage(type: boolean) {
        this.error = type;
    }

    closeSuccessMessage(type: boolean) {
        this.success = type;
    }

    // run the following function if the user tries to navigate away without submitting his data
    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.form.touched) {
            return true;
        }

        if (this.form.dirty) {
            return confirm('Do you want to discard the changes?');
        } else {
            return true;
        }
    }
}
