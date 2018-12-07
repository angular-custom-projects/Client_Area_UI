export class Addresses {
    constructor(
        public primary: boolean,
        public city: string,
        public postal_code: number,
        public state: string,
        public address: string) {
    }
}
