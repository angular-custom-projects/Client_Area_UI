import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { VerificationComponent } from './verification/verification.component';
import { DocumentsComponent } from './documents/documents.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { TradingKnowledgeComponent } from './trading-knowledge/trading-knowledge.component';
import { FinancialBackgroundComponent } from './financial-background/financial-background.component';
import { AgreementsComponent } from './agreements/agreements.component';

const routes: Routes = [
    {
        path: '', component: ProfileComponent, children: [
            {path: '', component: ProfileDetailsComponent, pathMatch: 'full'},
            {path: 'verification', component: VerificationComponent},
            {path: 'documents', component: DocumentsComponent},
            {path: 'change-password', component: ChangePasswordComponent},
            {path: 'bank-info', component: BankInfoComponent},
            {path: 'trading-knowledge', component: TradingKnowledgeComponent},
            {path: 'financial-background', component: FinancialBackgroundComponent},
            {path: 'agreements', component: AgreementsComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {
}
