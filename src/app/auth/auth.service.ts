import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
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
        return this.http.post('http://localhost:3000/clients/register', userData);
    }

    // login a client
    loginUser(userData: {}) {
        this.http.post<any>(`http://localhost:3000/auth/login`, userData).subscribe(
            response => {
                // add elements to the local storage
                localStorage.setItem('clientFirstName', response.client.first_name);
                localStorage.setItem('clientLastName', response.client.last_name);
                localStorage.setItem('mAToken', response.token);
                // update the subject with the correct data
                this.firstName.next(localStorage.getItem('clientFirstName'));
                this.lastName.next(localStorage.getItem('clientLastName'));
                // redirect the user to the dashboard
                this.router.navigate(['/dashboard']);
            },
            error => console.log(error)
        );
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

    // get the token
    getToken() {
        return localStorage.getItem('mAToken');
    }

    // check if the user is authenticated by checking the token
    isAuthenticated() {
        return localStorage.getItem('mAToken') != null;
    }
}
