import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[appPhoneCodeValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PhoneCodeValidatorDirective,
        multi: true
    }]
})
export class PhoneCodeValidatorDirective implements Validator {

    constructor() {
    }

    validate(control: AbstractControl): { [key: string]: any } | null {
        if (!(/^[+][0-9]{1,20}$/.test(control.value))) {
            return {'wrongCode': true};
        }

        return null;
    }

}
