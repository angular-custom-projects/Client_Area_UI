import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[appOnlyTextValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: OnlyTextValidatorDirective,
        multi: true
    }]
})
export class OnlyTextValidatorDirective implements Validator {

    constructor() {
    }

    validate(control: AbstractControl): { [key: string]: any } | null {
        if (!(/^[a-zA-Z]+$/.test(control.value))) {
            return {'notText': true};
        }

        return null;
    }

}
