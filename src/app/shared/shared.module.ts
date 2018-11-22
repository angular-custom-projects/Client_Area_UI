// this module is used for the components or directives that needs to be shared among multiple features or modules

// =====Very important=====
// don't add any service here

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
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
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule
    ],
    exports: [
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
