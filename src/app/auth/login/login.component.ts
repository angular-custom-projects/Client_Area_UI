import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    // the following will be used to unsubscribe from errors when the user navigate away from the login page
    isError: Subscription;
    isLoginErrorMessage: Subscription;
    // will be used to show the correct confirmation to the user
    error: boolean;
    // will be used to store the error message if found
    errorMessage = '';

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.isError = this.authService.loginError.subscribe(
            (isLoginError: boolean) => {
                this.error = isLoginError;
            }
        );
        this.isLoginErrorMessage = this.authService.loginErrorMessage.subscribe(
            (error: string) => {
                this.errorMessage = error;
            }
        );
    }

    ngOnDestroy() {
        // here is the unsubscribe
        this.isError.unsubscribe();
        this.isLoginErrorMessage.unsubscribe();
    }

    onSignin(form: NgForm) {
        const username = form.value.username;
        const password = form.value.password;
        // this.authService.loginUser({username, password});
        this.authService.loginUser({username, password});
    }

    closeErrorMessage(type: boolean) {
        this.error = type;
    }
}
