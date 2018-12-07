import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FundingContainerComponent} from "./funding-container/funding-container.component";
import {FundingComponent} from "./funding/funding.component";

const routes: Routes = [
    {
        path: '', component: FundingContainerComponent, children: [
            {path: '', component: FundingComponent, pathMatch: 'full'}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundingRoutingModule { }
