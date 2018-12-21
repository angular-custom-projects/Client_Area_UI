import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ProfileService} from '../profile.service';
import {ClientDetails} from '../../models/client-details';
import {DatePipe} from '@angular/common';
import {Country} from '../../models/country';
import {AuthService} from '../../auth/auth.service';
import {Email} from '../../models/email';
import {Phones} from '../../models/phones';
import {Addresses} from '../../models/addresses';

@Component({
    selector: 'app-profile-details',
    templateUrl: './profile-details.component.html',
    styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
    // countries for the dropdown
    clientInfoArray: ClientDetails;
    countries: Country[];
    // // perDetailsForm: FormGroup;
    //
    // // education for dropdown
    // educations: any = [
    //     'Professional Qualification',
    //     'University / College',
    //     'Secondary Education',
    //     'Primary Education',
    //     'No Education'
    // ];

    // Is user's account activated
    // accountActive = false;

    // user profile fields
    cUsername: string;
    cFirstName: string;
    cLastName: string;
    cEmail: string;
    cPhone: string;
    cAddress: string;
    // city = '';
    // address = '';
    // zipcode = '';
    // phoneNumber = '';
    //
    // // temporary value - this will be replaced with values from database
    // username = 'test_account';
    // email = 'test@example.com';

    currentDate = new Date();
    maxDate = new Date();
    // form using reactive approach
    perDetailsForm: FormGroup;
    // will be used to check the user's account status (active or not)
    active = false;
    // will be used to show the correct confirmation to the user
    error = false;
    success = false;

    formData: ClientDetails;

    constructor(private  profileService: ProfileService, private datePie: DatePipe,
                private authService: AuthService) {
        this.authService.getCountries().subscribe(data => {
            this.countries = data['countryCodes'];
        });
    }

    ngOnInit() {
        this.currentDate.setFullYear(this.currentDate.getFullYear() - 18);
        this.maxDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate());
        this.perDetailsForm = new FormGroup({
            'username': new FormControl({disabled: this.active}, Validators.required),
            'firstName': new FormControl({disabled: this.active}, Validators.required),
            'lastName': new FormControl({disabled: this.active}, Validators.required),
            'dateOfBirth': new FormControl({disabled: this.active}, Validators.required),
            'gender': new FormControl({disabled: this.active}, Validators.required),
            'countryList': new FormControl({disabled: this.active}, Validators.required),
            'city': new FormControl({disabled: this.active}, Validators.required),
            'address': new FormControl({disabled: this.active}, Validators.required),
            'address2': new FormControl({disabled: this.active}),
            'zip': new FormControl({disabled: this.active}, Validators.required),
            'state': new FormControl({disabled: this.active}, Validators.required),
            'phoneNumber': new FormControl({disabled: this.active}, Validators.required),
            'email': new FormControl({
                disabled: this.active
            }, [Validators.required, Validators.email]),
        });
        this.profileService.getClientInfo().subscribe(
            data => {
                this.clientInfoArray = data['data'];
                this.cUsername = this.clientInfoArray.username;
                this.cFirstName = this.clientInfoArray.name.first_name;
                this.cLastName = this.clientInfoArray.name.last_name;
                this.perDetailsForm.get('countryList').setValue(this.getCountryName(this.clientInfoArray.country));
                this.cEmail = this.getPrimaryEmail(this.clientInfoArray.emails);
                this.cPhone = this.getPrimaryPhone(this.clientInfoArray.phone);
                this.cAddress = this.getPrimaryAddress(this.clientInfoArray.addresses);

            },
            error => console.log(error)
        );


    }

    getPrimaryAddress(address: Addresses[]) {
        let primaryAddress: Addresses;
        if (address) {
            primaryAddress = address.find(data => data.primary === true);
            return (primaryAddress.address);
        } else {
            return ('');
        }
    }

    getPrimaryPhone(phone: Phones[]) {
        let primaryPhone: Phones;
        if (phone) {
            primaryPhone = phone.find(data => data.primary === true);
            return (primaryPhone.phone_code + '' + primaryPhone.phone_number);
        } else {
            return ('');
        }
    }

    getPrimaryEmail(email: Email[]) {
        let primaryEmail: Email;
        primaryEmail = email.find(data => data.primary === true);
        return primaryEmail.email;
    }

    getCountryName(countryN: string) {
        let selectedCountry: Country;
        selectedCountry = this.countries.find(data => data.country_code === countryN);
        return selectedCountry;
    }

    onSubmit(form: NgForm) {
        // this.accountActive = true;
        // this.firstName = form.value.firstName;
        // this.lastName = form.value.lastName;
        // this.education = form.value.education;
        // this.dob = form.value.dob;
        // this.country = form.value.country;
        // this.city = form.value.city;
        // this.address = form.value.address;
        // this.zipcode = form.value.zipcode;
        // this.phoneNumber = form.value.phoneNumber;
        const dateTest = new Date(this.perDetailsForm.value.dateOfBirth);
        const testing = this.datePie.transform(dateTest, 'yyyy-MM-dd');
        // this.formData = new ClientDetails(
        //     this.perDetailsForm.value.username,
        //     this.perDetailsForm.value.firstName,
        //     this.perDetailsForm.value.lastName,
        //     testing,
        //     this.perDetailsForm.value.gender,
        //     this.perDetailsForm.value.country,
        //     this.perDetailsForm.value.city,
        //     this.perDetailsForm.value.zip,
        //     this.perDetailsForm.value.state,
        //     this.perDetailsForm.value.phoneNumber,
        //     this.perDetailsForm.value.email,
        //     this.perDetailsForm.value.address,
        //     this.perDetailsForm.value.address2
        // );
        console.log(this.formData);
    }

    closeErrorMessage(type: boolean) {
        this.error = type;
    }

    closeSuccessMessage(type: boolean) {
        this.success = type;
    }

}
