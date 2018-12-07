import {Name} from "./name";
import {Phone} from "./phone";
import {DateOfBirth} from "./date-of-birth";

export class JointInfo {
    constructor(
        public name: Name,
        public country: string,
        public date_of_birth: DateOfBirth,
        public gender: string,
        public email: string,
        public city: string,
        public state: string,
        public postal_code: number,
        public address: string,
        public phone: Phone) {
    }
}
