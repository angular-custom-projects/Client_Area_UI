import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    // get the first name of the client
    firstName = localStorage.getItem('clientFirstName');
    // get the last name of the client
    lastName = localStorage.getItem('clientLastName');
    // set the number of notifications
    notificationsNum = 4;

    constructor(public authService: AuthService) {
    }

    ngOnInit() {
        // update the first name of the client (we are using observable because the header component is already rendered)
        this.authService.firstName.subscribe(
            (name: string) => {
                this.firstName = name;
            }
        );
        // update the last name of the client (we are using observable because the header component is already rendered)
        this.authService.lastName.subscribe(
            (name: string) => {
                this.lastName = name;
            }
        );
    }

    onLogout() {
        this.authService.logout();
    }

}
