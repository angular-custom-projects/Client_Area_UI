import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';

import {TradingAccountsRoutingModule} from './trading-accounts-routing.module';
import {TradingAccountsComponent} from './trading-accounts/trading-accounts.component';
import {TradingAccountsContainerComponent} from './trading-accounts-container/trading-accounts-container.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        TradingAccountsRoutingModule,
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule
    ],
    declarations: [TradingAccountsComponent, TradingAccountsContainerComponent]
})
export class TradingAccountsModule {
}
