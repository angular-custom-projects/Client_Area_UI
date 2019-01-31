// this module is used for the components or directives that needs to be shared among multiple features or modules

// =====Very important=====
// don't add any service here

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {MaterialModule} from '../material/material.module';

import {ProfileCompletionComponent} from '../profile-completion/profile-completion.component';
import {NotFoundComponent} from '../core/not-found/not-found.component';
import {StopPropagationDirective} from '../directives/stop-propagation.directive';
import {ConfirmEqualValidatorDirective} from './custom-validators/confirm-equal-validator.directive';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material';
import {APP_DATE_FORMATS, AppDateAdapter} from './app-date-adapter';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {OnlyTextValidatorDirective} from './custom-validators/only-text-validator.directive';
import {PhoneCodeValidatorDirective} from './custom-validators/phone-code-validator.directive';
import {AtLeastOneDigitDirective} from './custom-validators/at-least-one-digit.directive';
import {AtLeastOneLowerDirective} from './custom-validators/at-least-one-lower.directive';
import {AtLeastOneUpperDirective} from './custom-validators/at-least-one-upper.directive';
import {AtLeastEightDirective} from './custom-validators/at-least-eight.directive';
import {AtLeastOneSpecialCharacterDirective} from './custom-validators/at-least-one-special-character.directive';
import {WebsiteUrlDirective} from './custom-validators/website-url.directive';
import {OnlyNumbersLettersDirective} from './custom-validators/only-numbers-letters.directive';
import {IbanDirective} from './custom-validators/iban.directive';
import {OnlyNumbersDirective} from './custom-validators/only-numbers.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule,
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule,
        ProfileCompletionComponent,
        NotFoundComponent,
        ConfirmationComponent,
        StopPropagationDirective,
        ConfirmEqualValidatorDirective,
        OnlyTextValidatorDirective,
        PhoneCodeValidatorDirective,
        AtLeastEightDirective,
        AtLeastOneLowerDirective,
        AtLeastOneUpperDirective,
        AtLeastOneDigitDirective,
        AtLeastOneSpecialCharacterDirective,
        WebsiteUrlDirective,
        IbanDirective,
        OnlyNumbersDirective,
        OnlyNumbersLettersDirective
    ],
    declarations: [
        ProfileCompletionComponent,
        NotFoundComponent,
        ConfirmationComponent,
        StopPropagationDirective,
        ConfirmEqualValidatorDirective,
        OnlyTextValidatorDirective,
        PhoneCodeValidatorDirective,
        AtLeastEightDirective,
        AtLeastOneLowerDirective,
        AtLeastOneUpperDirective,
        AtLeastOneDigitDirective,
        AtLeastOneSpecialCharacterDirective,
        WebsiteUrlDirective,
        IbanDirective,
        OnlyNumbersDirective,
        OnlyNumbersLettersDirective
    ],
    providers: [
        {
            provide: DateAdapter, useClass: AppDateAdapter
        },
        {
            provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
        }
    ]
})
export class SharedModule {
}
