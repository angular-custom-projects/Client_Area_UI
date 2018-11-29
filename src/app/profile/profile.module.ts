// this module is used for the profile feature
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {ProfileComponent} from './profile/profile.component';
import {SharedModule} from '../shared/shared.module';
import {BankDetailsComponent} from './bank-details/bank-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProfileRoutingModule,
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule
    ],
    declarations: [ProfileDetailsComponent, ProfileComponent, BankDetailsComponent]
})
export class ProfileModule {
}
