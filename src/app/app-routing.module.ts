import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NotFoundComponent} from './core/not-found/not-found.component';
import {LazyAuthGuardService} from './guards/lazy-auth-guard.service';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    // the following is used for lazy loading
    {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canLoad: [LazyAuthGuardService]},
    {path: 'profile', loadChildren: './profile/profile.module#ProfileModule', canLoad: [LazyAuthGuardService]},
    {
        path: 'trading-accounts',
        loadChildren: './trading-accounts/trading-accounts.module#TradingAccountsModule',
        canLoad: [LazyAuthGuardService]
    },
    {path: 'wallet', loadChildren: './wallet/wallet.module#WalletModule', canLoad: [LazyAuthGuardService]},
    // the following path to catch unknown routes
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
