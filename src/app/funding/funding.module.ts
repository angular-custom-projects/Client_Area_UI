import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundingRoutingModule } from './funding-routing.module';
import { FundingContainerComponent } from './funding-container/funding-container.component';
import { FundingComponent } from './funding/funding.component';
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import {MaterialModule} from "../material/material.module";
import {SharedModule} from "../shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgxMatSelectSearchModule,
      FundingRoutingModule,
      AngularFontAwesomeModule,
      FlexLayoutModule,
      MaterialModule,
      SharedModule
  ],
  declarations: [FundingContainerComponent, FundingComponent]
})
export class FundingModule { }
