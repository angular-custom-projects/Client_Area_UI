import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

    // set profile menu panel in closed state as default
    panelOpenState = false;

    // currrent url path
    url = '';

    // profile menu links
    sidebarMenuItems = [
      {link: '/profile', title: 'Profile Details', icon: 'person'},
      {link: '/profile/verification', title: 'Verification', icon: 'verified_user'},
      {link: '/profile/documents', title: 'Documents', icon: 'description'},
      {link: '/profile/change-password', title: 'Change Password', icon: 'lock'},
      {link: '/profile/bank-info', title: 'Your Bank Info', icon: 'account_balance'},
      {link: '/profile/agreements', title: 'Agreements', icon: 'assignment'},
    ];  

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.parent.url.subscribe((urlPath) => {
            this.url = urlPath[urlPath.length - 1].path;            
        });
    }

}
