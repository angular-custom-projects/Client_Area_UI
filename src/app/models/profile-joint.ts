export class ProfileJoint {
    constructor(public username: string,
                public first_name: string,
                public last_name: string,
                public date_of_birth: string,
                public gender: string,
                public country: string,
                public city: string,
                public zip: number,
                public state: number,
                public phone: number,
                public email: string,
                public account_debit_authorization: string,
                public address: string,
                public address2?: string) {
    }
}
