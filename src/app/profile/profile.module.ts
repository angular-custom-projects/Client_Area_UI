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
import { VerificationComponent } from './verification/verification.component';
import { DocumentsComponent } from './documents/documents.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { TradingKnowledgeComponent } from './trading-knowledge/trading-knowledge.component';
import { FinancialBackgroundComponent } from './financial-background/financial-background.component';
import { AgreementsComponent } from './agreements/agreements.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule,
        FormsModule
    ],
    declarations: [ProfileDetailsComponent, ProfileComponent, VerificationComponent, DocumentsComponent, ChangePasswordComponent, BankInfoComponent, TradingKnowledgeComponent, FinancialBackgroundComponent, AgreementsComponent]
})
export class ProfileModule {
}