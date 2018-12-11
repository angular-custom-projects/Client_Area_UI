// =====Very important=====
// there is no need to add any service here because from angular 6+ any service you
// create is injected in here by default using the root syntax in injectable

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';

import {MaterialModule} from './material/material.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule,
        AuthModule,
        SharedModule,
        CoreModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
