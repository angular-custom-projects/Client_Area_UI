// this module is for the authentication
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { FourDigitCodeComponent } from './four-digit-code/four-digit-code.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule,
        AuthRoutingModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        FourDigitCodeComponent
    ]
})
export class AuthModule {
}
