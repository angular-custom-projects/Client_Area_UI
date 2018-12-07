// this module is used for the components or directives that needs to be shared among multiple features or modules

// =====Very important=====
// don't add any service here

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {MaterialModule} from '../material/material.module';

import {ProfileCompletionComponent} from '../profile-completion/profile-completion.component';
import {NotFoundComponent} from '../core/not-found/not-found.component';
import {StopPropagationDirective} from '../directives/stop-propagation.directive';

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
        StopPropagationDirective
    ],
    declarations: [
        ProfileCompletionComponent,
        NotFoundComponent,
        StopPropagationDirective
    ]
})
export class SharedModule {
}
