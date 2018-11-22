import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../shared/shared.module';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {
}
