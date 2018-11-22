import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';

import {AuthService} from '../auth.service';
import {CanComponentDeactivate} from '../../guards/can-activate-deactivate.service';
import {User} from '../../models/user';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, CanComponentDeactivate {
    // set countries for the dropdown
    countries: any = ['Malaysia', 'Cyprus', 'Africa', 'United States of America', 'United Kingdom'];
    // used to show a confirmation message to the client if he successfully send his information for registration
    status = false;
    // set the default country of the dropdown
    currentCountry = 'Malaysia';

    // get the registration form using view child
    @ViewChild('f') form: NgForm;
    user: User;
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
    }

    ngOnInit() {
    }

    // register a new user
    onSignup() {
        // const first_name = this.user.first_name;
        // const last_name = this.user.last_name;
        // const email = this.user.email;
        // const country = this.user.country;
        // const phone = this.user.phone;
        // const username = this.user.username;
        // const password = this.user.password;
        // const countryCode = this.user.countryCode;

        this.user = new User(this.form.value.firstName, this.form.value.lastName, this.form.value.email,
            this.form.value.country, this.form.value.contactData.phoneNumber,
            this.form.value.username, this.form.value.password, this.form.value.contactData.countryCode);

        this.authService.registerUser(this.user).subscribe(
            (response: any) => {
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
