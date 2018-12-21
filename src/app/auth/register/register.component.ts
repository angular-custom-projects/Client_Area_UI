import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';

import {AuthService} from '../auth.service';
import {CanComponentDeactivate} from '../../guards/can-activate-deactivate.service';
import {User} from '../../models/user';
import {Phone} from '../../models/phone';
import {Country} from '../../models/country';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, CanComponentDeactivate {
    // set countries for the dropdown
    // : any;
    // countries: any = ['Malaysia', 'Cyprus', 'Africa', 'United States of America', 'United Kingdom'];
    countries: Country[];
    // used to show a confirmation message to the client if he successfully send his information for registration
    status = false;
    // set the default country of the dropdown
    currentCountry = 'AL';
    selectedCountry: string = '';
    // get the registration form using view child
    @ViewChild('f') form: NgForm;
    user: User;
    phoneNo: Phone;
    // {
    //     first_name: this.form.value.firstName,
    //     last_name: this.form.value.lastName,
    //     email: this.form.value.email,
    //     country: this.form.value.country,
    //     phone: this.form.value.phoneNumber,
    //     username: this.form.value.username,
    //     password: this.form.value.password,
    //     countryCode: this.form.value.countryCode
    // };


    constructor(private authService: AuthService) {
        this.authService.getCountries().subscribe(data => {
            this.countries = data['countryCodes'];
        });
    }

    onCountryChange(value) {
        this.selectedCountry = value['dialling_code'];
    }

    ngOnInit() {

    }

    // register a new user
    onSignup() {

        this.user = new User();
        this.phoneNo = new Phone();
        this.phoneNo.phone_code = this.selectedCountry;
        this.phoneNo.phone_number = this.form.value.contactData.phoneNumber;
        this.user.first_name = this.form.value.firstName;
        this.user.last_name = this.form.value.lastName;
        this.user.email = this.form.value.email;
        this.user.country = this.form.value.country['country_code'];
        this.user.username = this.form.value.username;
        this.user.password = this.form.value.password;
        this.user.phone = this.phoneNo;
        this.user.client_type = 'individual';
        console.log(this.user);
        this.authService.registerUser(this.user).subscribe(
            (response: any) => {
                console.log(response);
                if (response.status === true) {
                    this.status = true;
                }
            },
            error => console.log(error)
        );
        this.form.onReset();
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
