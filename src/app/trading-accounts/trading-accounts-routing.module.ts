import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TradingAccountsComponent} from './trading-accounts/trading-accounts.component';
import {TradingAccountsContainerComponent} from './trading-accounts-container/trading-accounts-container.component';

const routes: Routes = [
    {
        path: '', component: TradingAccountsContainerComponent, children: [
            {path: '', component: TradingAccountsComponent, pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TradingAccountsRoutingModule {
}
