import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[appOnlyNumbersLetters]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: OnlyNumbersLettersDirective,
        multi: true
    }]
})
export class OnlyNumbersLettersDirective implements Validator {

    constructor() {
    }

    validate(control: AbstractControl): { [key: string]: any } | null {
        if (!(/^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/.test(control.value))) {
            return {'notOnlyNumbersLetters': true};
        }

        return null;
    }
}
