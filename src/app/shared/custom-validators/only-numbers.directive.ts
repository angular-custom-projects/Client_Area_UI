import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[appOnlyNumbers]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: OnlyNumbersDirective,
        multi: true
    }]
})
export class OnlyNumbersDirective implements Validator {

    constructor() {
    }

    validate(control: AbstractControl): { [key: string]: any } | null {
        if (!(/^[0-9]*$/.test(control.value))) {
            return {'notOnlyNumber': true};
        }

        return null;
    }

}
