import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ResetPasswordS1Component} from "./reset-password-s1/reset-password-s1.component";
import {ResetPasswordS2Component} from "./reset-password-s2/reset-password-s2.component";

import {CanActivateLoginService} from '../guards/can-activate-login.service';
import {CanActivateDeactivateService} from '../guards/can-activate-deactivate.service';

const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [CanActivateLoginService]},
    {path: 'register', component: RegisterComponent, canDeactivate: [CanActivateDeactivateService]},
    {
        path: 'forgot-password',
        component: ResetPasswordS1Component,
        canActivate: [CanActivateLoginService],
        canDeactivate: [CanActivateDeactivateService]
    },
    {
        path: 'forgot-password-step-two',
        component: ResetPasswordS2Component,
        canActivate: [CanActivateLoginService],
        canDeactivate: [CanActivateDeactivateService]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
