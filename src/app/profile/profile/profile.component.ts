import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {AuthService} from '../../auth/auth.service';
import {ProfileService} from '../profile.service';
import {DirectorsInfo} from '../../models/directors-info';
import {ShareHoldersInfo} from '../../models/share-holders-info';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
    // get the current client type
    clientType = localStorage.getItem('clientType');
    clientTypeSubscription: Subscription;
    // used to show the correct menu based on the current client type
    sidebarMenuItems = [];
    // get list of directors and shareholders (for corporate account)
    directors: DirectorsInfo[];
    directorsSubscription: Subscription;
    shareHolders: ShareHoldersInfo[];
    shareHoldersSubscription: Subscription;
    // show the directors and shareholders panel
    isCorporate = false;

    constructor(private authService: AuthService,
                private profileService: ProfileService) {
    }

    ngOnInit() {
        // update the client type
        this.clientTypeSubscription = this.authService.clientT.subscribe(
            (type: string) => {
                this.clientType = type;
                console.log(type);
            }
        );
        if (this.clientType === 'Corporate') {
            this.isCorporate = true;
            this.sidebarMenuItems = [
                {link: '/profile', title: 'Profile Details', icon: 'person'},
                {link: '/profile/verification', title: 'Verification', icon: 'verified_user'},
                {link: '/profile/documents', title: 'Documents', icon: 'description'},
                {link: '/profile/change-password', title: 'Change Password', icon: 'lock'},
                {link: '/profile/bank-info', title: 'Your Bank Info', icon: 'account_balance'},
                {link: '/profile/trading-knowledge', title: 'Trading Knowledge', icon: 'trending_up'},
                {link: '/profile/financial-background', title: 'Financial Background', icon: 'library_books'},
                {link: '/profile/agreements', title: 'Agreements', icon: 'assignment'},
            ];

            // get a list of all directors so that we can display it in the panel
            this.profileService.getDirectors();
            this.directorsSubscription = this.profileService.directorsChanged.subscribe(
                (directorsList: DirectorsInfo[]) => {
                    this.directors = directorsList;
                }
            );
            // get a list of all shareholders so that we can display it in the panel
            this.profileService.getShareHolders();
            this.shareHoldersSubscription = this.profileService.shareHoldersChanged.subscribe(
                (shareHoldersList: ShareHoldersInfo[]) => {
                    this.shareHolders = shareHoldersList;
                }
            );
        } else if (this.clientType === 'Joint') {
            this.sidebarMenuItems = [
                {link: '/profile', title: 'Account Holder 1 Details', icon: 'person'},
                {link: '/profile/joint/0', title: 'Account Holder 2 Details', icon: 'person'},
                {link: '/profile/verification', title: 'Verification', icon: 'verified_user'},
                {link: '/profile/change-password', title: 'Change Password', icon: 'lock'},
                {link: '/profile/bank-info', title: 'Your Bank Info', icon: 'account_balance'},
                {link: '/profile/trading-knowledge', title: 'Trading Knowledge', icon: 'trending_up'},
                {link: '/profile/financial-background', title: 'Financial Background', icon: 'library_books'},
                {link: '/profile/agreements', title: 'Agreements', icon: 'assignment'},
            ];
        } else {
            this.sidebarMenuItems = [
                {link: '/profile', title: 'Profile Details', icon: 'person'},
                {link: '/profile/verification', title: 'Verification', icon: 'verified_user'},
                {link: '/profile/documents', title: 'Documents', icon: 'description'},
                {link: '/profile/change-password', title: 'Change Password', icon: 'lock'},
                {link: '/profile/bank-info', title: 'Your Bank Info', icon: 'account_balance'},
                {link: '/profile/trading-knowledge', title: 'Trading Knowledge', icon: 'trending_up'},
                {link: '/profile/financial-background', title: 'Financial Background', icon: 'library_books'},
                {link: '/profile/agreements', title: 'Agreements', icon: 'assignment'},
            ];
        }
    }

    ngOnDestroy() {
        this.clientTypeSubscription.unsubscribe();
        if (this.clientType === 'Corporate') {
            this.directorsSubscription.unsubscribe();
            this.shareHoldersSubscription.unsubscribe();
        }
    }

}
