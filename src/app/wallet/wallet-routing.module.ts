import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WalletContainerComponent} from './wallet-container/wallet-container.component';
import {WalletComponent} from './wallet/wallet.component';

const routes: Routes = [
    {
        path: '', component: WalletContainerComponent, children: [
            {path: '', component: WalletComponent, pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WalletRoutingModule {
}
