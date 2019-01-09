import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[appWebsiteUrl]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: WebsiteUrlDirective,
        multi: true
    }]
})
export class WebsiteUrlDirective implements Validator {

    constructor() {
    }

    validate(control: AbstractControl): { [key: string]: any } | null {
        if (!(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(control.value))) {
            return {'notURL': true};
        }

        return null;
    }
}
