import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProfileJointService {
    // profile completion percentage
    profileCompletion = 19;
    // get the list of countries
    countries: any = ['Malaysia', 'Cyprus', 'Africa', 'United States of America', 'United Kingdom', 'CY'];
    // set email
    email = 'john_doe@fxprimus.com';
    // set the username of the client
    username = this.email;
    // set the client DOB
    dateOfBirth = 'March 9, 1980';
    // set the client gender
    gender = 'Male';
    // set the client country
    country = 'CY';
    // set the city
    city = 'nicosia';
    // set the address
    address = '14 andrea teloni street';
    // set the second address
    secondAddress = '14 andrea teloni street';
    // set postal code
    postalCode = 3120;
    // set state
    state = 3120;
    // set phone number
    phoneNumber = 35799791266;

    constructor() {
    }
}
