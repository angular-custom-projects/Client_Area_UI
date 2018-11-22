// this module is used to add all modules, components or directives which you want to use every where in your app
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FlexLayoutModule} from '@angular/flex-layout';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NotFoundComponent} from './not-found/not-found.component';

import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AppRoutingModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    providers: []
})
export class CoreModule {
}
