import { Name } from './name';
import { Phones } from './phones';
import { DateOfBirth } from './date-of-birth';

export class JointInfo {
    name: Name;
    country: string;
    date_of_birth: DateOfBirth;
    gender: string;
    email: string;
    city: string;
    state: string;
    postal_code: number;
    address: string;
    phones: Phones;
}