import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appAtLeastOneUpper]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: AtLeastOneUpperDirective,
        multi: true
    }]
})
export class AtLeastOneUpperDirective implements Validator {

  constructor() { }

    validate(control: AbstractControl): { [key: string]: any } | null {
        if (!(/(?=.*[A-Z])/.test(control.value))) {
            return {'notUpper': true};
        }

        return null;
    }
}
