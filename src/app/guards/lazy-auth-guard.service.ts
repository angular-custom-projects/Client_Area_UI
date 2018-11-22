import {Injectable} from '@angular/core';
import {CanLoad, Route, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {AuthService} from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class LazyAuthGuardService implements CanLoad {
    constructor(private authService: AuthService, private router: Router) {
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        // if the user is authenticated allow him to go to the required feature otherwise redirect him to the login page
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }
}
