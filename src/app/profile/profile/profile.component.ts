import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    sidebarMenuItems = [
        {link: '/profile', title: 'Profile Details', icon: 'person'},
        {link: '/profile/verification', title: 'Verification', icon: 'verified_user'},
        {link: '/profile/documents', title: 'Documents', icon: 'description'},
        {link: '/profile/change-password', title: 'Change Password', icon: 'lock'},
        {link: '/profile/bank-info', title: 'Your Bank Info', icon: 'account_balance'},
        {link: '/profile/agreements', title: 'Agreements', icon: 'assignment'},
    ];

    url = '';

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.parent.url.subscribe((urlPath) => {
            this.url = urlPath[urlPath.length - 1].path;
        });
    }

}
