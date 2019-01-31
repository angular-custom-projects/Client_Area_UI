import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../auth/auth.service';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

import {filter} from 'rxjs/internal/operators';
import {map} from 'rxjs/internal/operators';
import {mergeMap} from 'rxjs/internal/operators';

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
    // whether to show login button
    showLogin: boolean;
    // whether to show Open Account button
    showOpenAccount: boolean;

    constructor(public authService: AuthService, private _router: Router, private activatedRoute: ActivatedRoute) {
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

        // to show or hide Login button and Open Account Button
        this._router.events.pipe(filter((event) => event instanceof NavigationEnd))
            .pipe(map(() => this.activatedRoute))
            .pipe(map((_route) => {
                while (_route.firstChild) {
                    _route = _route.firstChild;
                }
                return _route;
            }))
            .pipe(filter((_route) => _route.outlet === 'primary'))
            .pipe(mergeMap((_route) => _route.data))
            .subscribe((event) => {
                if (this._router.url === '/login') {
                    this.showOpenAccount = true;
                    this.showLogin = false;
                }
                if (this._router.url === '/register') {
                    this.showLogin = true;
                    this.showOpenAccount = false;
                }
            });
    }

    onLogout() {
        this.authService.logout();
    }

}
