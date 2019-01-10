import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[appAtLeastEight]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: AtLeastEightDirective,
        multi: true
    }]
})
export class AtLeastEightDirective implements Validator {

    constructor() {
    }

    validate(control: AbstractControl): { [key: string]: any } | null {
        if (!(/(?=^.{8,}$).*$/.test(control.value))) {
            return {'notEight': true};
        }

        return null;
    }

}
