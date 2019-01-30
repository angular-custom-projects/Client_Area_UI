import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe, TitleCasePipe} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {ShareHoldersInfo} from '../../models/share-holders-info';
import {Country} from '../../models/country';
import {ProfileService} from '../profile.service';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-share-holder',
    templateUrl: './share-holder.component.html',
    styleUrls: ['./share-holder.component.scss']
})
export class ShareHolderComponent implements OnInit, OnDestroy {
    // will be used to show the spinner
    loading = false;
    // will be used to store the share holder id (which is the array index)
    id: number;
    // form using reactive approach
    shareHolderDetailsForm: FormGroup;
    shareHolderSubscription: Subscription;
    shareHolders: ShareHoldersInfo[];
    // the following will be used to initialize the form if there are no data for the current
    // share holders or populate the form with his data
    shareHolder: ShareHoldersInfo = new ShareHoldersInfo(
        '',
        '',
        '',
        '',
        '',
        {
            primary: true,
            city: '',
            postal_code: 0,
            state: '',
            address: '',
            address2: ''
        },
        {
            primary: true,
            phone_code: '',
            phone_number: 0
        },
        {
            primary: true,
            email: ''
        },
    );
    // available genders
    genders = ['---', 'male', 'female', 'other'];
    // set countries for the drop down
    countries: Country[];
    // the following will be used to make sure that the client is at least 18 years old
    currentDate = new Date();
    maxDate = new Date();
    // will be used to check the user's account status (active or not)
    active = false;
    // will be used to show the correct confirmation to the user
    error = false;
    success = false;

    constructor(private profileService: ProfileService,
                private authService: AuthService,
                private datePie: DatePipe,
                private titleCasePipe: TitleCasePipe,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        // get a list of all countries and populate the drop down
        this.authService.getCountries().subscribe(data => {
            this.countries = data['countryCodes'];
        });
        this.currentDate.setFullYear(this.currentDate.getFullYear() - 18);
        this.maxDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate());
        this.shareHolderDetailsForm = new FormGroup({
            'firstName': new FormControl({value: this.shareHolder.first_name, disabled: this.active}, Validators.required),
            'lastName': new FormControl({value: this.shareHolder.last_name, disabled: this.active}, Validators.required),
            'dateOfBirth': new FormControl({value: new Date(this.shareHolder.date_of_birth), disabled: this.active}, Validators.required),
            'gender': new FormControl({value: this.shareHolder.gender, disabled: this.active}),
            'country': new FormControl({value: this.shareHolder.country, disabled: this.active}, Validators.required),
            'city': new FormControl({value: this.shareHolder.addresses.city, disabled: this.active}, Validators.required),
            'state': new FormControl({value: this.shareHolder.addresses.state, disabled: this.active}, Validators.required),
            'address': new FormControl({value: this.shareHolder.addresses.address, disabled: this.active}, Validators.required),
            'address2': new FormControl({value: this.shareHolder.addresses.address2, disabled: this.active}),
            'zip': new FormControl({value: this.shareHolder.addresses.postal_code, disabled: this.active}, Validators.required),
            'phoneCode': new FormControl({value: this.shareHolder.phone.phone_code, disabled: true}, Validators.required),
            'phoneNumber': new FormControl({value: this.shareHolder.phone.phone_number, disabled: this.active}, Validators.required),
            'email': new FormControl({
                value: this.shareHolder.emails.email,
                disabled: this.active
            }, [Validators.required, Validators.email]),
        });
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.loading = true;
                this.profileService.getShareHolders();
                this.shareHolderSubscription = this.profileService.shareHoldersChanged.subscribe(
                    (shareHoldersList: ShareHoldersInfo[]) => {
                        this.loading = false;
                        this.shareHolders = shareHoldersList;
                        this.shareHolder = shareHoldersList[this.id];
                        this.shareHolderDetailsForm.patchValue({firstName: this.titleCasePipe.transform(this.shareHolder.first_name)});
                        this.shareHolderDetailsForm.patchValue({lastName: this.titleCasePipe.transform(this.shareHolder.last_name)});
                        this.shareHolderDetailsForm.patchValue({dateOfBirth: new Date(this.shareHolder.date_of_birth)});
                        this.shareHolderDetailsForm.patchValue({gender: this.shareHolder.gender});
                        this.shareHolderDetailsForm.patchValue({country: this.shareHolder.country});
                        this.shareHolderDetailsForm.patchValue({city: this.titleCasePipe.transform(this.shareHolder.addresses.city)});
                        this.shareHolderDetailsForm.patchValue({state: this.titleCasePipe.transform(this.shareHolder.addresses.state)});
                        this.shareHolderDetailsForm.patchValue({address: this.titleCasePipe.transform(this.shareHolder.addresses.address)});
                        this.shareHolderDetailsForm.patchValue({zip: this.shareHolder.addresses.postal_code});
                        this.shareHolderDetailsForm.patchValue({phoneCode: this.shareHolder.phone.phone_code});
                        this.shareHolderDetailsForm.patchValue({phoneNumber: this.shareHolder.phone.phone_number});
                        this.shareHolderDetailsForm.patchValue({email: this.shareHolder.emails.email});
                    }
                );
            }
        );
    }

    ngOnDestroy() {
        this.shareHolderSubscription.unsubscribe();
    }

    onCountryChange(value) {
        for (const country of this.countries) {
            if (country.country_code === value) {
                this.shareHolder.phone.phone_code = country.dialling_code;
            }
        }
    }

    onSubmit() {
        const shareHolderDate = new Date(this.shareHolderDetailsForm.value.dateOfBirth);
        const finalShareHolderDate = this.datePie.transform(shareHolderDate, 'yyyy-MM-dd');
        const fCity = this.shareHolderDetailsForm.get('city').value;
        const fPostalCode = this.shareHolderDetailsForm.get('zip').value;
        const fState = this.shareHolderDetailsForm.get('state').value;
        const fAddress = this.shareHolderDetailsForm.get('address').value;
        const fAddress2 = this.shareHolderDetailsForm.get('address2').value;
        const fPhoneCode = this.shareHolderDetailsForm.get('phoneCode').value;
        const fPhoneNumber = this.shareHolderDetailsForm.get('phoneNumber').value;
        const fEmail = this.shareHolderDetailsForm.get('email').value;

        let shareHodlerGender = '';
        if (this.shareHolderDetailsForm.get('gender').value === '---') {
            shareHodlerGender = '';
        } else {
            shareHodlerGender = this.shareHolderDetailsForm.get('gender').value;
        }
        this.shareHolder = new ShareHoldersInfo(
            this.shareHolderDetailsForm.get('firstName').value,
            this.shareHolderDetailsForm.get('lastName').value,
            finalShareHolderDate,
            shareHodlerGender,
            this.shareHolderDetailsForm.get('country').value,
            {
                primary: true,
                city: fCity,
                postal_code: fPostalCode,
                state: fState,
                address: fAddress,
                address2: fAddress2
            },
            {
                primary: true,
                phone_code: fPhoneCode,
                phone_number: fPhoneNumber
            },
            {
                primary: true,
                email: fEmail
            },
        );
        console.log(this.shareHolder);
    }

    closeErrorMessage(type: boolean) {
        this.error = type;
    }

    closeSuccessMessage(type: boolean) {
        this.success = type;
    }
}
