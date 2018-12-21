import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private http: HttpClient;
    public clientInfo: any;

    profileCompletion = 19;
    // get the list of countries
    countries: any = ['Malaysia', 'Cyprus', 'Africa', 'United States of America', 'United Kingdom', 'CY'];
    // set the username of the client
    username = 'Adams';
    // set the client DOB
    dateOfBirth = 'March 9, 1980';
    // set the client gender
    gender = 'Male';
    // set the client country
    country = 'CY';
    // set the city
    city = '';
    // set the address
    address = '';
    // set the second address
    secondAddress = '';
    // set postal code
    postalCode = 3120;
    // set state
    state = 3120;
    // set phone number
    phoneNumber = '';
    // set email
    email = '';

    // check account debit authorization

    constructor(private handler: HttpBackend) {
        this.http = new HttpClient(handler);
    }

    getClientInfo() {
        const token = localStorage.getItem('mAToken');

        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + token
            })
        };
        return this.http.get(`http://18.195.135.30:8088/clients`, httpOptions);
    }
}
