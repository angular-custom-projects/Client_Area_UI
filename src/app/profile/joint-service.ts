import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';

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

    constructor(private http: HttpClient) {
        // this.http.get('http://localhost:4004/assets/joint_details.json').subscribe(data => console.log(data))
    }

    getJSON() {
        return this.http.get('http://localhost:4200/assets/joint-details.json')
    }

    putJson(fullname: string, dob: any, gender: string, country: string, city: string, address: string, address2: string, postalCode: string, state: string, phoneNo: string, jointOne: boolean) {
        console.log("full_name: " + fullname,
            "$date: " + dob,
            "gender: " + gender,
            "country: " + country,
            "city: " + city,
            "address: " + address,
            "address2: " + address2,
            "postal_code: " + postalCode,
            "state: " + state,
            "phone_number: " + phoneNo)
        // this.http.put("http://localhost:4004/assets/joint_details_update.json",
        //     {
        //         "full_name": fullname,
        //         "$date": dob,
        //         "gender": gender,
        //         "country": country,
        //         "city": city,
        //         "address": address,
        //         "postal_code": postalCode,
        //         "state": state,
        //         "phone_number": phoneNo,
        //     })
        //     .subscribe(
        //         data => {
        //             console.log("PUT Request is successful ", data);
        //         },
        //         error => {
        //             console.log("Rrror", error);
        //         }
        //     );
    }
}