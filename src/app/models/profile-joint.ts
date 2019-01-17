import { Name } from './name'
import { DateOfBirth } from './date-of-birth'
import { Emails } from './emails'
import { Addresses } from './addresses'
import { Phones } from './phones'
import { JointInfo } from './joint-info'
import { BankInfo } from './bank-info'

export class ProfileJoint {
    public username: string;
    public name: Name;
    public country: string;
    public date_of_birth: DateOfBirth;
    public politically_exposed: boolean;
    public us_citizen: boolean;
    public language: string;
    public gender: string;
    public regulator: string;
    public emails: Emails;
    public addresses: Addresses;
    public phones: Phones;
    public joint_info: JointInfo;
    public email: string;
    public bank_info: BankInfo;
}