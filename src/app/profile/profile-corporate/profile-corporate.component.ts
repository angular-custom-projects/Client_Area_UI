import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';
import {Subscription} from 'rxjs';
import {DirectorsInfo} from '../../models/directors-info';
import {ShareHoldersInfo} from '../../models/share-holders-info';

@Component({
  selector: 'app-profile-corporate',
  templateUrl: './profile-corporate.component.html',
  styleUrls: ['./profile-corporate.component.scss']
})
export class ProfileCorporateComponent implements OnInit, OnDestroy {
    directors: DirectorsInfo[];
    directorsSubscription: Subscription;
    shareHolders: ShareHoldersInfo[];
    shareHoldersSubscription: Subscription;
    sidebarMenuItems = [
        {link: '/profile', title: 'Profile Details', icon: 'person'},
        {link: '/profile/verification', title: 'Verification', icon: 'verified_user'},
        {link: '/profile/documents', title: 'Documents', icon: 'description'},
        {link: '/profile/change-password', title: 'Change Password', icon: 'lock'},
        {link: '/profile/bank-info', title: 'Your Bank Info', icon: 'account_balance'},
        {link: '/profile/agreements', title: 'Agreements', icon: 'assignment'},
    ];

    constructor(private profileService: ProfileService) {
    }

    ngOnInit() {
        this.profileService.getDirectors();
        this.directorsSubscription = this.profileService.directorsChanged.subscribe(
            (directorsList: DirectorsInfo[]) => {
                this.directors = directorsList;
            }
        );
        this.profileService.getShareHolders();
        this.shareHoldersSubscription = this.profileService.shareHoldersChanged.subscribe(
            (shareHoldersList: ShareHoldersInfo[]) => {
                this.shareHolders = shareHoldersList;
            }
        );
    }

    ngOnDestroy() {
        this.directorsSubscription.unsubscribe();
        this.shareHoldersSubscription.unsubscribe();
    }
}
