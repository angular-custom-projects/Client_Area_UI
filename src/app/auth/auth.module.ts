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
import {ChangePasswordComponent} from './change-password/change-password.component';

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
        ChangePasswordComponent
    ]
})
export class AuthModule {
}
