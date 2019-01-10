import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-profile-details',
    templateUrl: './profile-details.component.html',
    styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
    // countries for the dropdown
    countries: any = ['Malaysia', 'Cyprus', 'Africa', 'United States of America', 'United Kingdom'];

    // education for dropdown
    educations: any = [
        'Professional Qualification',
        'University / College',
        'Secondary Education',
        'Primary Education',
        'No Education'
    ]

    // Is user's account activated
    accountActive = false;

    // user profile fields
    firstName = '';
    lastName = '';
    education = '';
    dob = '';
    country = '';
    city = '';
    address = '';
    zipcode = '';
    phoneNumber = '';

    // temporary value - this will be replaced with values from database
    username = 'test_account';
    email = 'test@example.com';

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        this.accountActive = true;
        this.firstName = form.value.firstName;
        this.lastName = form.value.lastName;
        this.education = form.value.education;
        this.dob = form.value.dob;
        this.country = form.value.country;
        this.city = form.value.city;
        this.address = form.value.address;
        this.zipcode = form.value.zipcode;
        this.phoneNumber = form.value.phoneNumber;
    }

}