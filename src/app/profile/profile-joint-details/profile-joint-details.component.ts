import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe, TitleCasePipe} from '@angular/common';
import {Subscription} from 'rxjs';

import {JointsInfo} from '../../models/joints-info';
import {Country} from '../../models/country';
import {ProfileService} from '../profile.service';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-profile-joint-details',
    templateUrl: './profile-joint-details.component.html',
    styleUrls: ['./profile-joint-details.component.scss']
})
export class ProfileJointDetailsComponent implements OnInit, OnDestroy {
    // will be used to show the spinner
    loading = false;
    // will be used to store the director id (which is the array index)
    id: number;
    // form using reactive approach
    jointDetailsForm: FormGroup;
    jointSubscription: Subscription;
    // the following will be used to initialize the form if there are no data for the current
    // joint account or populate the form with the data
    joint: JointsInfo = new JointsInfo(
        {
            first_name: '',
            last_name: '',
            full_name: '',
        },
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        {
            primary: true,
            phone_code: '',
            phone_number: 0
        },
        '',
        ''
    );
    // available genders
    genders = ['male', 'female', 'other'];
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
    errorMessage = '';

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
        this.jointDetailsForm = new FormGroup({
                'firstName': new FormControl({value: this.joint.name.first_name, disabled: this.active}, Validators.required),
                'lastName': new FormControl({value: this.joint.name.last_name, disabled: this.active}, Validators.required),
                'address': new FormControl({value: this.joint.address, disabled: this.active}, Validators.required),
                'city': new FormControl({value: this.joint.city, disabled: this.active}, Validators.required),
                'country': new FormControl({value: this.joint.country, disabled: this.active}, Validators.required),
                'zip': new FormControl({value: this.joint.postal_code, disabled: this.active}, Validators.required),
                'state': new FormControl({value: this.joint.state, disabled: this.active}),
                'dateOfBirth': new FormControl({value: new Date(this.joint.date_of_birth), disabled: this.active}, Validators.required),
                'email': new FormControl({value: this.joint.email, disabled: this.active}, [Validators.required, Validators.email]),
                'gender': new FormControl({value: this.joint.gender, disabled: this.active}),
                'phoneCode': new FormControl({value: this.joint.phone.phone_code, disabled: true}, Validators.required),
                'phoneNumber': new FormControl({value: this.joint.phone.phone_number, disabled: this.active}, Validators.required),
                'politicallyExposed': new FormControl({value: this.joint.politically_exposed, disabled: this.active}, Validators.required),
                'usCitizenship': new FormControl({value: this.joint.us_citizenship, disabled: this.active}, Validators.required)
            }
        );
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.loading = true;
                this.profileService.getJointAccount();
                this.jointSubscription = this.profileService.jointAccountsChanged.subscribe(
                    (jointsList: JointsInfo[]) => {
                        this.loading = false;
                        this.joint = jointsList[this.id];
                        this.jointDetailsForm.patchValue({firstName: this.titleCasePipe.transform(this.joint.name.first_name)});
                        this.jointDetailsForm.patchValue({lastName: this.titleCasePipe.transform(this.joint.name.last_name)});
                        this.jointDetailsForm.patchValue({address: this.titleCasePipe.transform(this.joint.address)});
                        this.jointDetailsForm.patchValue({city: this.titleCasePipe.transform(this.joint.city)});
                        this.jointDetailsForm.patchValue({country: this.joint.country});
                        this.jointDetailsForm.patchValue({zip: this.joint.postal_code});
                        this.jointDetailsForm.patchValue({state: this.titleCasePipe.transform(this.joint.state)});
                        this.jointDetailsForm.patchValue({dateOfBirth: new Date(this.joint.date_of_birth)});
                        this.jointDetailsForm.patchValue({email: this.joint.email});
                        this.jointDetailsForm.patchValue({gender: this.joint.gender});
                        this.jointDetailsForm.patchValue({phoneCode: this.joint.phone.phone_code});
                        this.jointDetailsForm.patchValue({phoneNumber: this.joint.phone.phone_number});
                        this.jointDetailsForm.patchValue({politicallyExposed: this.joint.politically_exposed});
                        this.jointDetailsForm.patchValue({usCitizenship: this.joint.us_citizenship});
                    },
                    error => {
                        this.error = true;
                        this.errorMessage = error;
                    }
                );
            }
        );
    }

    ngOnDestroy() {
        this.jointSubscription.unsubscribe();
    }

    onCountryChange(value) {
        for (const country of this.countries) {
            if (country.country_code === value) {
                this.joint.phone.phone_code = country.dialling_code;
            }
        }
    }

    onSubmit() {
        const JointDate = new Date(this.jointDetailsForm.value.dateOfBirth);
        const finalJointDate = this.datePie.transform(JointDate, 'yyyy-MM-dd');

        let jointGender = '';
        if (this.jointDetailsForm.get('gender').value === '---') {
            jointGender = '';
        } else {
            jointGender = this.jointDetailsForm.get('gender').value;
        }
        this.joint = new JointsInfo(
            {
                first_name: this.jointDetailsForm.get('firstName').value,
                last_name: this.jointDetailsForm.get('lastName').value,
                full_name: this.jointDetailsForm.get('firstName').value + ' ' + this.jointDetailsForm.get('lastName').value,
            },
            this.jointDetailsForm.get('address').value,
            this.jointDetailsForm.get('city').value,
            this.jointDetailsForm.get('country').value,
            this.jointDetailsForm.get('zip').value,
            this.jointDetailsForm.get('state').value,
            finalJointDate,
            this.jointDetailsForm.get('email').value,
            jointGender,
            {
                primary: true,
                phone_code: this.jointDetailsForm.get('phoneCode').value,
                phone_number: this.jointDetailsForm.get('phoneNumber').value
            },
            this.jointDetailsForm.get('politicallyExposed').value,
            this.jointDetailsForm.get('usCitizenship').value
        );
        console.log(this.joint);
    }

    closeErrorMessage(type: boolean) {
        this.error = type;
    }

    closeSuccessMessage(type: boolean) {
        this.success = type;
    }
}
