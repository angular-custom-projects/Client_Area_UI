import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // create a subject (which is observable a& observer at the same time) for first name and last name
    firstName = new Subject();
    lastName = new Subject();
    // we will need this variable to make sure that the interceptor will not be applied on this service
    private http: HttpClient;

    constructor(private handler: HttpBackend, private router: Router) {
        // the following line is used to ignore the interceptor for this service
        this.http = new HttpClient(handler);
    }

    // register new client
    registerUser(userData: {}) {
        return this.http.post(`http://18.195.135.30:8088/clients`, userData);
    }

    // login a client
    loginUser(userData: {}) {
        this.http.post<any>(`http://18.195.135.30:8088/clients/login`, userData).subscribe(
            response => {
                // add elements to the local storage
                // localStorage.setItem('clientFirstName', response.client.first_name);
                // localStorage.setItem('clientLastName', response.client.last_name);
                // localStorage.setItem('mAToken', response.token);
                this.getClientInfo(response.data);
                // update the subject with the correct data
                // this.firstName.next(localStorage.getItem('clientFirstName'));
                // this.lastName.next(localStorage.getItem('clientLastName'));
                // redirect the user to the dashboard
                // this.router.navigate(['/dashboard']);
            },
            error => console.log(error)
        );
    }

    getClientInfo(token: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + token
            })
        };
        this.http.get(`http://18.195.135.30:8088/clients`, httpOptions).subscribe(
            data => {
                // add elements to the local storage
                localStorage.setItem('clientFirstName', data['data'].name.first_name);
                localStorage.setItem('clientLastName', data['data'].name.last_name);
                localStorage.setItem('mAToken', token);
                // update the subject with the correct data
                this.firstName.next(localStorage.getItem('clientFirstName'));
                this.lastName.next(localStorage.getItem('clientLastName'));
                // redirect the user to the dashboard
                this.router.navigate(['/dashboard']);
            },
            error => console.log(error));
    }

    // logout a client
    logout() {
        // remove data from the local storage
        localStorage.removeItem('mAToken');
        localStorage.removeItem('clientFirstName');
        localStorage.removeItem('clientLastName');
        // redirect the user to the login page
        this.router.navigate(['/login']);
    }

    // run the following function if the user wants to reset his password (it will send an email to the user)
    forgotPassword(userData: {}) {
        return this.http.post(`http://18.195.135.30:8088/clients/forgot-password`, userData);
    }

    // run the following function if the user has a token and submit has password and confirm password
    resetPassword(data: {}) {
        return this.http.post(`http://18.195.135.30:8088/clients/reset-password`, data);
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
        return this.http.get('http://localhost:4200/assets/countries.json');
    }
}
