// this module is used for the wallet feature
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';

import {WalletContainerComponent} from './wallet-container/wallet-container.component';
import {WalletRoutingModule} from './wallet-routing.module';
import {WalletComponent} from './wallet/wallet.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        WalletRoutingModule,
        AngularFontAwesomeModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule
    ],
    declarations: [WalletComponent, WalletContainerComponent]
})
export class WalletModule {
}
