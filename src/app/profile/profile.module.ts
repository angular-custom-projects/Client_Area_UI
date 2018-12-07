// this module is used for the profile feature
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {ProfileComponent} from './profile/profile.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule,
        ProfileRoutingModule,
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule
    ],
    declarations: [ProfileDetailsComponent, ProfileComponent]
})
export class ProfileModule {
}
