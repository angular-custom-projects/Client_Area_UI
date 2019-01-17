import { Name } from './name';
import { Phone } from './phone';
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
    phone: Phone;
}