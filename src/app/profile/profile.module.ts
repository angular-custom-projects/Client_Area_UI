// this module is used for the profile feature
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {ProfileComponent} from './profile/profile.component';
import {SharedModule} from '../shared/shared.module';
import { VerificationStepperComponent } from '../verification-stepper/verification-stepper.component';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule
    ],
    declarations: [ProfileDetailsComponent, ProfileComponent, VerificationStepperComponent]
})
export class ProfileModule {
}
