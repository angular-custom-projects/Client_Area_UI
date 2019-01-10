import {Addresses} from './addresses';
import {Phones} from './phones';
import {Name} from './name';
import {Email} from './email';

export class ClientDetails {
    name: Name;
    emails: Email [];
    country: string;
    phones: Phones [];
    username: string;
    password: string;
    client_type: string;
    addresses: Addresses [];
    phone: Phones;
    date_of_birth: string;
    gender: string;
}
