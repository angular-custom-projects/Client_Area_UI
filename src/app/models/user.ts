// single user model
export class User {
    constructor(public first_name: string,
                public last_name: string,
                public email: string,
                public country: string,
                public phone: number,
                public username: string,
                public password: string,
                public countryCode: string) {
    }
}
