import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ProfileService} from '../profile.service';
import {ClientDetails} from '../../models/client-details';
import {DatePipe} from '@angular/common';
import {Country} from '../../models/country';
import {AuthService} from '../../auth/auth.service';
import {Addresses} from '../../models/addresses';
import {Phones} from '../../models/phones';

interface UpdateClientInfo {
    date_of_birth: string;
    // gender: string;
    addresses: Addresses[];
    phones: Phones[];
}

@Component({
    selector: 'app-profile-details',
    templateUrl: './profile-details.component.html',
    styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
    // form using reactive approach
    perDetailsForm: FormGroup;
    // will be used to check the user's account status (active or not)
    active = false;
    // will be used to show the correct confirmation to the user
    error = false;
    success = false;

    genders = ['male', 'female'];

    clientInfo: ClientDetails;
    updateClientInfo: UpdateClientInfo;
    // the following variables will be used to initialize and populate the form data
    clientUsername = '';
    clientFirstName = '';
    clientLastName = '';
    clientDOB = '';
    clientGender = 'male';
    clientCountry = '';
    clientCity = '';
    clientAddress = '';
    clientPostalCode: number;
    clientState = '';
    clientPhoneCode = '';
    clientPhoneNumber: number;
    clientEmail = '';
    // the following 2 lines will be used to make sure that the client is at least 18Y OLD
    currentDate = new Date();
    maxDate = new Date();
    // set countries for the drop down
    countries: Country[];

    constructor(private  profileService: ProfileService,
                private datePie: DatePipe,
                private authService: AuthService) {
    }

    ngOnInit() {
        // get a list of all countries and populate the drop down
        this.authService.getCountries().subscribe(data => {
            this.countries = data['countryCodes'];
        });
        // make user that the client is at least 18 years old
        this.currentDate.setFullYear(this.currentDate.getFullYear() - 18);
        this.maxDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate());
        // use reactive approach for the form in this component
        this.perDetailsForm = new FormGroup({
            'username': new FormControl({value: this.clientUsername, disabled: true}, Validators.required),
            'firstName': new FormControl({value: this.clientFirstName, disabled: true}, Validators.required),
            'lastName': new FormControl({value: this.clientLastName, disabled: true}, Validators.required),
            'dateOfBirth': new FormControl({value: this.clientDOB, disabled: this.active}, Validators.required),
            'gender': new FormControl({value: this.clientGender, disabled: this.active}),
            'countryList': new FormControl({value: this.clientCountry, disabled: true}, Validators.required),
            'city': new FormControl({value: this.clientCity, disabled: this.active}, Validators.required),
            'address': new FormControl({value: this.clientAddress, disabled: this.active}, Validators.required),
            'zip': new FormControl({value: this.clientPostalCode, disabled: this.active}, Validators.required),
            'state': new FormControl({value: this.clientState, disabled: this.active}, Validators.required),
            'phoneCode': new FormControl({value: this.clientPhoneCode, disabled: true}, Validators.required),
            'phoneNumber': new FormControl({value: this.clientPhoneNumber, disabled: this.active}, Validators.required),
            'email': new FormControl({value: this.clientEmail, disabled: true}
                , [Validators.required, Validators.email]),
        });
        this.profileService.getClientInfo().subscribe(data => {
                if (data.data) {
                    // check if the client account is pending or not so that he can update his data or not
                    if (data.data.status === 'pending' || data.data.status === undefined) {
                        this.active = false;
                    } else {
                        this.active = true;
                    }
                    this.clientInfo = data['data'];
                    this.clientUsername = this.clientInfo.username;
                    this.clientFirstName = this.clientInfo.name.first_name;
                    this.clientLastName = this.clientInfo.name.last_name;
                    this.perDetailsForm.patchValue({username: this.clientUsername});
                    this.perDetailsForm.patchValue({firstName: this.clientFirstName});
                    this.perDetailsForm.patchValue({lastName: this.clientLastName});
                    // check if the user has a date of birth
                    if (this.clientInfo.date_of_birth) {
                        this.clientDOB = this.clientInfo.date_of_birth;
                        this.perDetailsForm.patchValue({dateOfBirth: new Date(this.clientDOB)});
                    }
                    this.clientCountry = this.clientInfo.country;
                    this.perDetailsForm.patchValue({countryList: this.clientCountry});
                    // check if the client has an address or addresses
                    if (this.clientInfo.addresses && this.clientInfo.addresses.length > 0) {
                        // if the client has a primary address display it for him
                        for (let i = 0; i < this.clientInfo.addresses.length; i++) {
                            if (this.clientInfo.addresses[i].primary) {
                                this.clientCity = this.clientInfo.addresses[i].city;
                                this.clientAddress = this.clientInfo.addresses[i].address;
                                this.clientPostalCode = this.clientInfo.addresses[i].postal_code;
                                this.clientState = this.clientInfo.addresses[i].state;
                                this.perDetailsForm.patchValue({city: this.clientCity});
                                this.perDetailsForm.patchValue({address: this.clientAddress});
                                this.perDetailsForm.patchValue({zip: this.clientPostalCode});
                                this.perDetailsForm.patchValue({state: this.clientState});
                                break;
                            }
                        }
                        // if the client doesn't have a primary address display the first address in the array
                        if (this.clientAddress === undefined) {
                            this.perDetailsForm.patchValue({city: this.clientInfo.addresses[0].city});
                            this.perDetailsForm.patchValue({address: this.clientInfo.addresses[0].address});
                            this.perDetailsForm.patchValue({zip: this.clientInfo.addresses[0].postal_code});
                            this.perDetailsForm.patchValue({state: this.clientInfo.addresses[0].state});
                        }
                    }
                    // check if the client has a phone number or phone numbers
                    if (this.clientInfo.phones && this.clientInfo.phones.length > 0) {
                        // if the client has a primary phone number display for him
                        for (let i = 0; i < this.clientInfo.phones.length; i++) {
                            if (this.clientInfo.phones[i].primary) {
                                this.clientPhoneNumber = this.clientInfo.phones[i].phone_number;
                                this.clientPhoneCode = this.clientInfo.phones[i].phone_code;
                                this.perDetailsForm.patchValue(
                                    {phoneNumber: this.clientPhoneNumber});
                                this.perDetailsForm.patchValue(
                                    {phoneCode: this.clientPhoneCode});
                                // this.phoneNumber = this.clientInfo.phones[i].phone_code + this.clientInfo.phones[i].phone_number;
                                break;
                            }
                        }
                        // if the client doesn't have a primary phone number display the first phone number for him
                        if (this.clientPhoneNumber === undefined) {
                            this.clientPhoneNumber = this.clientInfo.phones[0].phone_number;
                            this.clientPhoneCode = this.clientInfo.phones[0].phone_code;
                            this.perDetailsForm.patchValue(
                                {phoneNumber: this.clientPhoneNumber});
                            this.perDetailsForm.patchValue(
                                {phoneCode: this.clientPhoneCode});
                        }
                    }
                    // check if the client has an email or emails
                    if (this.clientInfo.emails && this.clientInfo.emails.length > 0) {
                        // if the client has a primary email display it for him
                        for (let i = 0; i < this.clientInfo.emails.length; i++) {
                            if (this.clientInfo.emails[i].primary) {
                                this.clientEmail = this.clientInfo.emails[i].email;
                                this.perDetailsForm.patchValue(
                                    {email: this.clientEmail});
                                // this.email = this.clientInfo.emails[i].email;
                                break;
                            }
                        }
                        // if the client doesn't have a primary email display the first email for him
                        if (this.clientEmail === undefined) {
                            this.clientEmail = this.clientInfo.emails[0].email;
                            this.perDetailsForm.patchValue(
                                {email: this.clientEmail});
                        }
                    }
                }
            },
            error => console.log(error));
    }

    onSubmit() {
        const clientDate = new Date(this.perDetailsForm.value.dateOfBirth);
        const finalClientDate = this.datePie.transform(clientDate, 'yyyy-MM-dd');
        this.updateClientInfo = {
            date_of_birth: finalClientDate,
            // gender: this.perDetailsForm.get('gender').value,
            addresses: [{
                primary: true,
                city: this.perDetailsForm.get('city').value,
                address: this.perDetailsForm.get('address').value,
                postal_code: this.perDetailsForm.get('zip').value,
                state: this.perDetailsForm.get('state').value
            }],
            phones: [{
                primary: true,
                phone_code: this.perDetailsForm.get('phoneCode').value,
                phone_number: this.perDetailsForm.get('phoneNumber').value
            }],
            // emails: {primary: true, email: this.perDetailsForm.get('email').value}
        };
        this.profileService.updateClientInfo(this.updateClientInfo).subscribe(
            response => console.log(response),
            error => console.log(error));
    }

    closeErrorMessage(type: boolean) {
        this.error = type;
    }

    closeSuccessMessage(type: boolean) {
        this.success = type;
    }

}
