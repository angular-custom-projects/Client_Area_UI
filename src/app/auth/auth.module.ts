// this module is for the authentication
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule,
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule,
        AuthRoutingModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ]
})
export class AuthModule {
}
