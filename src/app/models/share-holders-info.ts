import {Addresses} from './addresses';
import {Emails} from './emails';
import {Phones} from './phones';

export class ShareHoldersInfo {
    constructor(public first_name: string,
                public last_name: string,
                public date_of_birth: string,
                public gender: string,
                public country: string,
                public addresses: Addresses,
                public phone: Phones,
                public emails: Emails) {
    }
}
