import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[appAtLeastOneDigit]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: AtLeastOneDigitDirective,
        multi: true
    }]
})
export class AtLeastOneDigitDirective implements Validator {

    constructor() {
    }

    validate(control: AbstractControl): { [key: string]: any } | null {
        if (!(/(?=.*\d)/.test(control.value))) {
            return {'notDigit': true};
        }

        return null;
    }
}
