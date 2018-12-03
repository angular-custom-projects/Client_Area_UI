import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile-details',
    templateUrl: './profile-details.component.html',
    styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
    // get the first name of the client
    firstName = localStorage.getItem('clientFirstName');

    // get the last name of the client
    lastName = localStorage.getItem('clientLastName');

    // temporary value - this will be replaced with values from database
    username = 'test_account';
    phoneNumber = '+60123456789';
    email = 'test@example.com';

    constructor() {
    }

    ngOnInit() {
    }

}