import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe, TitleCasePipe} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {DirectorsInfo} from '../../models/directors-info';
import {Country} from '../../models/country';
import {ProfileService} from '../profile.service';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-director',
    templateUrl: './director.component.html',
    styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit, OnDestroy {
// will be used to store the director id (which is the array index)
    id: number;
    // form using reactive approach
    directorDetailsForm: FormGroup;
    directorSubscription: Subscription;
    directors: DirectorsInfo[];
    // the following will be used to initialize the form if there are no data for the current director or populate the form with his data
    director: DirectorsInfo = new DirectorsInfo(
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
        this.directorDetailsForm = new FormGroup({
            'firstName': new FormControl({value: this.director.first_name, disabled: this.active}, Validators.required),
            'lastName': new FormControl({value: this.director.last_name, disabled: this.active}, Validators.required),
            'dateOfBirth': new FormControl({value: new Date(this.director.date_of_birth), disabled: this.active}, Validators.required),
            'gender': new FormControl({value: this.director.gender, disabled: this.active}),
            'country': new FormControl({value: this.director.country, disabled: this.active}, Validators.required),
            'city': new FormControl({value: this.director.addresses.city, disabled: this.active}, Validators.required),
            'state': new FormControl({value: this.director.addresses.state, disabled: this.active}, Validators.required),
            'address': new FormControl({value: this.director.addresses.address, disabled: this.active}, Validators.required),
            'address2': new FormControl({value: this.director.addresses.address2, disabled: this.active}),
            'zip': new FormControl({value: this.director.addresses.postal_code, disabled: this.active}, Validators.required),
            'phoneCode': new FormControl({value: this.director.phone.phone_code, disabled: true}, Validators.required),
            'phoneNumber': new FormControl({value: this.director.phone.phone_number, disabled: this.active}, Validators.required),
            'email': new FormControl({value: this.director.emails.email, disabled: this.active}, [Validators.required, Validators.email]),
        });
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.profileService.getDirectors();
                this.directorSubscription = this.profileService.directorsChanged.subscribe(
                    (directorsList: DirectorsInfo[]) => {
                        this.directors = directorsList;
                        this.director = directorsList[this.id];
                        this.directorDetailsForm.patchValue({firstName: this.titleCasePipe.transform(this.director.first_name)});
                        this.directorDetailsForm.patchValue({lastName: this.titleCasePipe.transform(this.director.last_name)});
                        this.directorDetailsForm.patchValue({dateOfBirth: new Date(this.director.date_of_birth)});
                        this.directorDetailsForm.patchValue({gender: this.director.gender});
                        this.directorDetailsForm.patchValue({country: this.director.country});
                        this.directorDetailsForm.patchValue({city: this.titleCasePipe.transform(this.director.addresses.city)});
                        this.directorDetailsForm.patchValue({state: this.titleCasePipe.transform(this.director.addresses.state)});
                        this.directorDetailsForm.patchValue({address: this.titleCasePipe.transform(this.director.addresses.address)});
                        this.directorDetailsForm.patchValue({zip: this.director.addresses.postal_code});
                        this.directorDetailsForm.patchValue({phoneCode: this.director.phone.phone_code});
                        this.directorDetailsForm.patchValue({phoneNumber: this.director.phone.phone_number});
                        this.directorDetailsForm.patchValue({email: this.director.emails.email});
                    }
                );
            }
        );
    }

    ngOnDestroy() {
        this.directorSubscription.unsubscribe();
    }

    onCountryChange(value) {
        for (const country of this.countries) {
            if (country.country_code === value) {
                this.director.phone.phone_code = country.dialling_code;
            }
        }
    }

    onSubmit() {
        const directorDate = new Date(this.directorDetailsForm.value.dateOfBirth);
        const finalDirectorDate = this.datePie.transform(directorDate, 'yyyy-MM-dd');
        const fCity = this.directorDetailsForm.get('city').value;
        const fPostalCode = this.directorDetailsForm.get('zip').value;
        const fState = this.directorDetailsForm.get('state').value;
        const fAddress = this.directorDetailsForm.get('address').value;
        const fAddress2 = this.directorDetailsForm.get('address2').value;
        const fPhoneCode = this.directorDetailsForm.get('phoneCode').value;
        const fPhoneNumber = this.directorDetailsForm.get('phoneNumber').value;
        const fEmail = this.directorDetailsForm.get('email').value;

        let directorGender = '';
        if (this.directorDetailsForm.get('gender').value === '---') {
            directorGender = '';
        } else {
            directorGender = this.directorDetailsForm.get('gender').value;
        }
        this.director = new DirectorsInfo(
            this.directorDetailsForm.get('firstName').value,
            this.directorDetailsForm.get('lastName').value,
            finalDirectorDate,
            directorGender,
            this.directorDetailsForm.get('country').value,
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
        console.log(this.director);
    }

    closeErrorMessage(type: boolean) {
        this.error = type;
    }

    closeSuccessMessage(type: boolean) {
        this.success = type;
    }

}
