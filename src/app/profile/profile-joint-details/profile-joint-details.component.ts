import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

import {ProfileJoint} from '../../models/profile-joint';
import {ActivatedRoute} from '@angular/router';
import {Addresses} from '../../models/addresses';
import {Phones} from '../../models/phones';
import {JointInfo} from '../../models/joint-info';
import {Name} from '../../models/name';
import {DateOfBirth} from '../../models/date-of-birth';
import {Emails} from '../../models/emails';
import {ProfileJointService} from '../joint-service';

@Component({
    selector: 'app-profile-joint-details',
    templateUrl: './profile-joint-details.component.html',
    styleUrls: ['./profile-joint-details.component.scss']
})
export class ProfileJointDetailsComponent implements OnInit {
    jointArray: ProfileJoint[] = [];
    // jointArray_response: ProfileJoint[] = [];
    jointOneActive = false;
    jointTwoActive = false;
    // will be used to show the correct confirmation to the user
    error = false;
    success = false;
    // set countries for the drop down
    countries = this.profileJointService.countries;
    @ViewChild('f') form: NgForm;
    // get the username of the client
    pUsername = '';
    // pUsername = "";
    // get the first name of the client
    fName = '';
    // get the last name of the client
    lName = localStorage.getItem('clientLastName');
    // get the client DOB
    DOB = '';
    // DOB = this.jointArray['client_id']
    // get the client gender
    pGender = '';
    // get the client country
    currentCountry = '';
    // get the city
    pCity = '';
    // get the address
    pAddress = '';
    // get the second address
    pSecondAddress = '';
    // get postal code
    pPostalCode = '';
    // get state
    pState = '';
    // get phone number
    pPhoneNumber = '';
    // get email
    pEmail = '';

    formData: ProfileJoint;
    private sub: any;
    joint_id: number;
    joint_one = true;
    array_length: number;

    constructor(private profileJointService: ProfileJointService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.joint_id = +params['profile_id']; // (+) converts string 'id' to a number
            if (this.joint_id === 2) {
                this.joint_one = false;
            } else {
                this.joint_one = true;
            }
            this.getDataUsingPromise();
            // In a real app: dispatch action to load the details here.
        });

        // this.profileJointService.getJSON().subscribe(
        //     data => {
        //         this.jointArray.push(<ProfileJoint>data['data']);
        //         let jOneAddress: Addresses = this.jointArray[0].addresses;
        //         let jOnePhones: Phones = this.jointArray[0].phones;
        //         let jSecInfo: JointInfo = this.jointArray[0].joint_info;
        //         let jName: Name = this.joint_one ? this.jointArray[0].name : jSecInfo[0].name;
        //         let jDob: DateOfBirth = this.joint_one ? this.jointArray[0].date_of_birth : jSecInfo[0].date_of_birth;
        //         let jOneEmail: Emails = this.jointArray[0].emails;
        //         let jPhoneCode = this.joint_one ? jOnePhones[0].phone_code : jSecInfo[0].phone.phone_code;
        //         let jPhoneNumber = this.joint_one ? jOnePhones[0].phone_number : jSecInfo[0].phone.phone_number;
        //         this.fName = jName.full_name;
        //         this.DOB = jDob.$date;
        //         this.pGender = this.joint_one ? this.jointArray[0].gender : jSecInfo[0].gender;
        //         this.currentCountry = this.joint_one ? this.jointArray[0].country : jSecInfo[0].country;
        //         this.pCity = this.joint_one ? jOneAddress[0].city : jSecInfo[0].city;
        //         this.pAddress = this.joint_one ? jOneAddress[0].address : jSecInfo[0].address;
        //         // // // get the second address
        //         this.pSecondAddress = this.joint_one ? this.jointArray[0]
        // .name.full_name : this.jointArray[0].joint_info[0].name.full_name;
        //         this.pPostalCode = this.joint_one ? jOneAddress[0].postal_code : jSecInfo[0].postal_code;
        //         this.pState = this.joint_one ? jOneAddress[0].state : jSecInfo[0].state;
        //         this.pPhoneNumber = jPhoneCode + '' + jPhoneNumber;
        //         this.pEmail = this.joint_one ? jOneEmail[0].email : jSecInfo[0].email;
        //
        //     },
        //     error => {
        //         console.log("Error in recieving data");
        //     },
        //     () => {
        //         console.log(this.jointArray);
        //     }
        // );

    }

    getDataUsingPromise() {
        return this.profileJointService.getJSON().toPromise().then(data => {
                this.jointArray.length = 0;
                this.jointArray.push(<ProfileJoint>data['data']);
                const jOneAddress: Addresses = this.jointArray[0].addresses;
                const jOnePhones: Phones = this.jointArray[0].phones;
                const jSecInfo: JointInfo = this.jointArray[0].joint_info;
                const jName: Name = this.joint_one ? this.jointArray[0].name : jSecInfo[0].name;
                const jDob: DateOfBirth = this.joint_one ? this.jointArray[0].date_of_birth : jSecInfo[0].date_of_birth;
                const jOneEmail: Emails = this.jointArray[0].emails;
                const jPhoneCode = this.joint_one ? jOnePhones[0].phone.phone_code : jSecInfo[0].phone.phone_code;
                const jPhoneNumber = this.joint_one ? jOnePhones[0].phone.phone_number : jSecInfo[0].phone.phone_number;
                this.fName = jName.full_name;
                this.DOB = jDob.$date;
                this.pGender = this.joint_one ? this.jointArray[0].gender : jSecInfo[0].gender;
                this.currentCountry = this.joint_one ? this.jointArray[0].country : jSecInfo[0].country;
                this.pCity = this.joint_one ? jOneAddress[0].city : jSecInfo[0].city;
                this.pAddress = this.joint_one ? jOneAddress[0].address : jSecInfo[0].address;
                // get the second address
                // this.pSecondAddress = this.joint_one ?
                // this.jointArray[0].name.full_name : this.jointArray[0].joint_info[0].name.full_name;
                this.pPostalCode = this.joint_one ? jOneAddress[0].postal_code : jSecInfo[0].postal_code;
                this.pState = this.joint_one ? jOneAddress[0].state : jSecInfo[0].state;
                this.pPhoneNumber = jPhoneCode + '' + jPhoneNumber;
                this.pEmail = this.joint_one ? jOneEmail[0].email : jSecInfo[0].email;
                this.pUsername = jOneEmail[0].email;
            },
            error => {
                console.log('Error in receiving data');
            }
        );
    }

    onSubmit() {
        this.profileJointService.putJson(
            this.form.value.firstName,
            this.form.value.dateOfBirth,
            this.form.value.gender,
            this.form.value.country,
            this.form.value.city,
            this.form.value.address,
            this.form.value.address2,
            this.form.value.zip,
            this.form.value.state,
            this.form.value.phoneNumber,
            this.joint_one,
        );

        if (this.joint_one === true) {
            this.jointOneActive = true;
        } else {
            this.jointTwoActive = true;
        }

        // console.log( this.form.value.phoneNumber)
        // this.formData = new ProfileJoint(
        // this.form.value.username,
        // this.form.value.firstName,
        // this.form.value.dateOfBirth,
        // this.form.value.gender,
        // this.form.value.country,
        // this.form.value.city,
        // this.form.value.zip,
        // this.form.value.state,
        // this.form.value.phoneNumber,
        // this.form.value.email,
        // this.form.value.address,
        // this.form.value.address2
        // );

        // console.log(this.formData);
    }
}
