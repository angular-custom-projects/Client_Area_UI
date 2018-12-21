import {Addresses} from './addresses';
import {Phones} from './phones';
import {Name} from './name';
import {Email} from './email';

export class ClientDetails {
    name: Name;
    emails: Email [];
    country: string;
    phone: Phones [];
    username: string;
    password: string;
    client_type: string;
    addresses: Addresses [];
    phones: Phones;
    date_of_birth: string;
    gender: string;
}
