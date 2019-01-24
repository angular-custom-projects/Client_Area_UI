import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProfileService} from '../profile.service';
import {AuthService} from '../../auth/auth.service';
import {Country} from '../../models/country';

interface BankI {
    'bank_payee_name': string;
    'bank_name': string;
    'bank_address': string;
    'bank_acc_no': string;
    'bank_swift_code': string;
    'bank_iban': string;
    'bank_country': string;
}

@Component({
    selector: 'app-bank-details',
    templateUrl: './bank-details.component.html',
    styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {
    // get the registration form using view child
    @ViewChild('f') form: NgForm;
    bankInfo: BankI = {
        'bank_payee_name': '',
        'bank_name': '',
        'bank_address': '',
        'bank_acc_no': '',
        'bank_swift_code': '',
        'bank_iban': '',
        'bank_country': ''
    };
    // set countries for the drop down
    countries: Country[];
    // set the default country of the dropdown
    currentCountry = 'CY';
    // used to show a confirmation message to the client
    errorGetClientInfo = false;
    error = false;
    success = false;
    // show the confirmation message for the user
    errorMessageGetClientInfo = '';
    errorMessage = '';

    constructor(private profileService: ProfileService, private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.getCountries().subscribe(data => {
            this.countries = data['countryCodes'];
        });
        this.profileService.getClientInfo().subscribe(data => {
            if (data.data.bank_info) {
                this.bankInfo = data.data.bank_info;
            }
        }, error => {
            this.errorGetClientInfo = true;
            this.errorMessageGetClientInfo = error['error'].errors[0];
        });
    }

    onSubmit() {
        this.bankInfo = {
            'bank_payee_name': this.form.value.payeeName,
            'bank_name': this.form.value.bankName,
            'bank_address': this.form.value.bankAddress,
            'bank_acc_no': this.form.value.bankAccNo,
            'bank_swift_code': this.form.value.bankSCode,
            'bank_iban': this.form.value.iban,
            'bank_country': this.form.value.country
        };
        this.profileService.updateBankInfo(this.bankInfo).subscribe(
            response => {
                this.success = true;
            },
            error => {
                this.error = true;
                this.errorMessage = error['error'].errors[0];
            });
    }

    closeErrorGetClientInfoMessage(type: boolean) {
        this.errorGetClientInfo = type;
    }

    closeErrorMessage(type: boolean) {
        this.error = type;
    }

    closeSuccessMessage(type: boolean) {
        this.success = type;
    }
}
