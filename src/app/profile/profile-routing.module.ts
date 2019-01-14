import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProfileComponent} from './profile/profile.component';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {VerificationComponent} from './verification/verification.component';
import {DocumentsComponent} from './documents/documents.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {TradingKnowledgeComponent} from './trading-knowledge/trading-knowledge.component';
import {FinancialBackgroundComponent} from './financial-background/financial-background.component';
import {AgreementsComponent} from './agreements/agreements.component';
import {BankDetailsComponent} from './bank-details/bank-details.component';
import {ProfileCorporateComponent} from './profile-corporate/profile-corporate.component';
import {DirectorComponent} from './director/director.component';
import {ShareHolderComponent} from './share-holder/share-holder.component';

let accountType = 'c';
let routes: Routes = [];

if (accountType === 'i') {
    routes = [
        {
            path: '', component: ProfileComponent, children: [
                {path: '', component: ProfileDetailsComponent, pathMatch: 'full'},
                {path: 'verification', component: VerificationComponent},
                {path: 'documents', component: DocumentsComponent},
                {path: 'change-password', component: ChangePasswordComponent},
                {path: 'trading-knowledge', component: TradingKnowledgeComponent},
                {path: 'financial-background', component: FinancialBackgroundComponent},
                {path: 'agreements', component: AgreementsComponent},
                {path: 'bank-info', component: BankDetailsComponent}
            ]
        }
    ];
} else if (accountType === 'c') {
    routes = [
        {
            path: '', component: ProfileCorporateComponent, children: [
                {path: '', component: ProfileDetailsComponent, pathMatch: 'full'},
                {path: 'verification', component: VerificationComponent},
                {path: 'documents', component: DocumentsComponent},
                {path: 'change-password', component: ChangePasswordComponent},
                {path: 'trading-knowledge', component: TradingKnowledgeComponent},
                {path: 'financial-background', component: FinancialBackgroundComponent},
                {path: 'agreements', component: AgreementsComponent},
                {path: 'bank-info', component: BankDetailsComponent},
                {path: 'director/:id', component: DirectorComponent},
                {path: 'shareholder/:id', component: ShareHolderComponent}
            ]
        }
    ];
}

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {
}
