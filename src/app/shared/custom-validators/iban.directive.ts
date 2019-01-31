import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[appIban]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: IbanDirective,
        multi: true
    }]
})
export class IbanDirective implements Validator {

    constructor() {
    }

    validate(control: AbstractControl): { [key: string]: any } | null {
        if (!(/^([A-Z]{2}[ \-]?[0-9]{2})(?=(?:[ \-]?[A-Z0-9]){9,30}$)((?:[ \-]?[A-Z0-9]{3,5}){2,7})([ \-]?[A-Z0-9]{1,3})?$/.test(control.value))) {
            return {'notIBAN': true};
        }

        return null;
    }

}
