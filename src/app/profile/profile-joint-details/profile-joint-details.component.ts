import {Component, OnInit, ViewChild} from "@angular/core";
import {NgForm} from '@angular/forms';

import {ProfileJointService} from "../profile-joint.service";
import {ProfileJoint} from '../../models/profile-joint';

@Component({
    selector: 'app-profile-joint-details',
    templateUrl: './profile-joint-details.component.html',
    styleUrls: ['./profile-joint-details.component.scss']
})
export class ProfileJointDetailsComponent implements OnInit {
    active = false;
    // will be used to show the correct confirmation to the user
    error = false;
    success = false;
    // set countries for the drop down
    countries = this.profileJointService.countries;
    @ViewChild('f') form: NgForm;
    // get the username of the client
    pUsername = this.profileJointService.username;
    // get the first name of the client
    fName = localStorage.getItem('clientFirstName');
    // get the last name of the client
    lName = localStorage.getItem('clientLastName');
    // get the client DOB
    DOB = this.profileJointService.dateOfBirth;
    // get the client gender
    pGender = this.profileJointService.gender;
    // get the client country
    currentCountry = this.profileJointService.country;
    // get the city
    pCity = this.profileJointService.city;
    // get the address
    pAddress = this.profileJointService.address;
    // get the second address
    pSecondAddress = this.profileJointService.secondAddress;
    // get postal code
    pPostalCode = this.profileJointService.postalCode;
    // get state
    pState = this.profileJointService.state;
    // get phone number
    pPhoneNumber = this.profileJointService.phoneNumber;
    // get email
    pEmail = this.profileJointService.email;

    formData: ProfileJoint;

    constructor(private profileJointService: ProfileJointService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.formData = new ProfileJoint(
            this.form.value.username,
            this.form.value.firstName,
            this.form.value.lastName,
            this.form.value.dateOfBirth,
            this.form.value.gender,
            this.form.value.country,
            this.form.value.city,
            this.form.value.zip,
            this.form.value.state,
            this.form.value.phoneNumber,
            this.form.value.email,
            this.form.value.address,
            this.form.value.address2
        );
        console.log(this.formData);
    }
}
