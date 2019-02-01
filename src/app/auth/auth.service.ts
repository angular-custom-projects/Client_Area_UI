import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {ProfileService} from '../profile/profile.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // will be used to check if URL has a token to reset the password so that we can use it in the header to dispaly the correct buttons
    passToken = new Subject();
    // countries URL
    countriesListURL = environment.countriesURL;
    // API URL
    envURL = environment.apiURL;
    // create a subject (which is observable a& observer at the same time) for first name, last name and client type
    firstName = new Subject();
    lastName = new Subject();
    clientT = new Subject();
    // will be used to show the error message to the user if any when he tries to login
    loginError = new Subject();
    // will be used to store the error message if found when he tries to login
    loginErrorMessage = new Subject();
    // we will need this variable to make sure that the interceptor will not be applied on this service
    private http: HttpClient;

    constructor(private handler: HttpBackend,
                private router: Router,
                private profileService: ProfileService) {
        // the following line is used to ignore the interceptor for this service
        this.http = new HttpClient(handler);
    }

    // register new client
    registerUser(userData: {}) {
        return this.http.post(this.envURL + `clients`, userData);
    }

    // login a client
    loginUser(userData: {}) {
        this.http.post<any>(this.envURL + `clients/login`, userData).subscribe(
            response => {
                // save the token in the local storage
                localStorage.setItem('mAToken', response['data']);
                this.profileService.getClientInfo().subscribe(
                    data => {
                        localStorage.setItem('clientFirstName', data['data'].name.first_name);
                        localStorage.setItem('clientLastName', data['data'].name.last_name);
                        localStorage.setItem('clientType', data['data'].client_type);
                        // update the subject with the correct data
                        this.firstName.next(localStorage.getItem('clientFirstName'));
                        this.lastName.next(localStorage.getItem('clientLastName'));
                        this.clientT.next(localStorage.getItem('clientType'));
                        // redirect the user to the profile
                        this.router.navigate(['/profile']);
                    }
                );
            },
            error => {
                this.loginError.next(true);
                this.loginErrorMessage.next(error['error'].errors[0]);
            }
        );
    }

    // logout a client
    logout() {
        // remove data from the local storage
        localStorage.clear();
        // redirect the user to the login page
        this.router.navigate(['/login']);
    }

    // run the following function if the user wants to reset his password (it will send an email to the user)
    forgotPassword(userData: {}) {
        return this.http.post(this.envURL + `clients/forgot-password`, userData);
    }

    // run the following function if the user has a token and submit has password and confirm password
    resetPassword(token, data: {}) {
        return this.http.post(this.envURL + `clients/reset-password/` + token, data);
    }

    // get the token
    getToken() {
        return localStorage.getItem('mAToken');
    }

    // check if the user is authenticated by checking the token
    isAuthenticated() {
        return localStorage.getItem('mAToken') != null;
    }

    getCountries() {
        return this.http.get(this.countriesListURL);
    }
}
