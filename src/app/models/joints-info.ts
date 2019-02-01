import {Phones} from './phones';
import {Name} from './name';

export class JointsInfo {
    constructor(public name: Name,
                public address: string,
                public city: string,
                public country: string,
                public postal_code: string,
                public state: string,
                public date_of_birth: string,
                public email: string,
                public gender: string,
                public phone: Phones,
                public politically_exposed: string,
                public us_citizenship: string) {
    }
}
