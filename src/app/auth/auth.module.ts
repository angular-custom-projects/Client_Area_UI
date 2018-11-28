// this module is for the authentication
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';

import {SharedModule} from "../shared/shared.module";
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ResetPasswordS1Component} from './reset-password-s1/reset-password-s1.component';
import {ResetPasswordS2Component} from './reset-password-s2/reset-password-s2.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule,
        AuthRoutingModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        ResetPasswordS1Component,
        ResetPasswordS2Component
    ]
})
export class AuthModule {
}
