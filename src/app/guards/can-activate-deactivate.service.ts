import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {AuthService} from '../auth/auth.service';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
    providedIn: 'root'
})

export class CanActivateDeactivateService implements CanActivate, CanDeactivate<CanComponentDeactivate> {

    constructor(private authService: AuthService, private router: Router) {
    }

    // if the user is authenticated allow him to go to the required page otherwise redirect him to the home page
    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot,
                routerStateSnapshot: RouterStateSnapshot) {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/']);
        }
    }

    // if the user make some changes to a form then leaves the page before submitting it run the can deactivate method
    canDeactivate(component: CanComponentDeactivate,
                  activatedRouteSnapshot: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}
