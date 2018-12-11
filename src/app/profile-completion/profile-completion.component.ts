import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile-completion',
    templateUrl: './profile-completion.component.html',
    styleUrls: ['./profile-completion.component.scss']
})
export class ProfileCompletionComponent implements OnInit {
    // get the first name of the client
    firstName = localStorage.getItem('clientFirstName');

    // get the last name of the client
    lastName = localStorage.getItem('clientLastName');

    // set the progress bar value
    profileCompletion = 19;

    constructor() {
    }

    ngOnInit() {
    }

}
