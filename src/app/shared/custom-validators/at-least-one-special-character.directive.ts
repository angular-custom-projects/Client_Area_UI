import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appAtLeastOneSpecialCharacter]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: AtLeastOneSpecialCharacterDirective,
        multi: true
    }]
})
export class AtLeastOneSpecialCharacterDirective implements Validator {

  constructor() { }

    validate(control: AbstractControl): { [key: string]: any } | null {
        if (!(/(?=.*[^\da-zA-Z])/.test(control.value))) {
            return {'notSpecialCh': true};
        }

        return null;
    }
}
