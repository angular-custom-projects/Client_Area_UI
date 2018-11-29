import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {ProfileComponent} from './profile/profile.component';
import {BankDetailsComponent} from "./bank-details/bank-details.component";

const routes: Routes = [
    {
        path: '', component: ProfileComponent, children: [
            {path: '', component: ProfileDetailsComponent, pathMatch: 'full'},
            {path: 'bank-info', component: BankDetailsComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {
}
