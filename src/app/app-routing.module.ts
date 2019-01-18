import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NotFoundComponent} from './core/not-found/not-found.component';
import {LazyAuthGuardService} from './guards/lazy-auth-guard.service';
import {CanActivateDeactivateService} from './guards/can-activate-deactivate.service';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    // the following is used for lazy loading
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canLoad: [LazyAuthGuardService],
        canActivate: [CanActivateDeactivateService]
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule',
        canLoad: [LazyAuthGuardService],
        canActivate: [CanActivateDeactivateService]
    },
    {
        path: 'trading-accounts',
        loadChildren: './trading-accounts/trading-accounts.module#TradingAccountsModule',
        canLoad: [LazyAuthGuardService],
        canActivate: [CanActivateDeactivateService]
    },
    {
        path: 'funding',
        loadChildren: './funding/funding.module#FundingModule',
        canLoad: [LazyAuthGuardService],
        canActivate: [CanActivateDeactivateService]
    },
    // the following path to catch unknown routes
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
