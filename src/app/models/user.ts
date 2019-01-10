// single user model
import {Phone} from './phone';
import {Country} from './country';

export class User {
    first_name: string;
    last_name: string;
    email: string;
    country: Country;
    phone: Phone;
    username: string;
    password: string;
    client_type: string;
}

// constructor(public first_name: string,
//             public last_name: string,
//             public email: string,
//             public country: string,
//             public phone: Phone,
//             public username: string,
//             public password: string,
//             // public countryCode: string
// ) {
// }
