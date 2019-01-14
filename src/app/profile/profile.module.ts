// this module is used for the profile feature
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {ProfileComponent} from './profile/profile.component';
import {SharedModule} from '../shared/shared.module';
import {VerificationComponent} from './verification/verification.component';
import {DocumentsComponent} from './documents/documents.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {TradingKnowledgeComponent} from './trading-knowledge/trading-knowledge.component';
import {FinancialBackgroundComponent} from './financial-background/financial-background.component';
import {AgreementsComponent} from './agreements/agreements.component';
import {VerificationStepperComponent} from '../verification-stepper/verification-stepper.component';
import {BankDetailsComponent} from './bank-details/bank-details.component';
import { ProfileCorporateComponent } from './profile-corporate/profile-corporate.component';
import { DirectorComponent } from './director/director.component';
import { ShareHolderComponent } from './share-holder/share-holder.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule,
        ProfileRoutingModule,
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule,
        FormsModule
    ],
    declarations: [
        ProfileDetailsComponent,
        ProfileComponent,
        BankDetailsComponent,
        VerificationComponent,
        DocumentsComponent,
        ChangePasswordComponent,
        TradingKnowledgeComponent,
        FinancialBackgroundComponent,
        AgreementsComponent,
        VerificationStepperComponent,
        ProfileCorporateComponent,
        DirectorComponent,
        ShareHolderComponent
    ]
})
export class ProfileModule {
}
