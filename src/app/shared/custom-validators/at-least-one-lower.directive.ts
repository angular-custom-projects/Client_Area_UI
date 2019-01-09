import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[appAtLeastOneLower]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: AtLeastOneLowerDirective,
        multi: true
    }]
})
export class AtLeastOneLowerDirective implements Validator {

    constructor() { }

    validate(control: AbstractControl): { [key: string]: any } | null {
        if (!(/(?=.*[a-z])/.test(control.value))) {
            return {'notLower': true};
        }

        return null;
    }
}
