import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ChangePasswordComponent} from "./change-password/change-password.component";

import {CanActivateLoginService} from '../guards/can-activate-login.service';
import {CanActivateDeactivateService} from '../guards/can-activate-deactivate.service';

const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [CanActivateLoginService]},
    {path: 'register', component: RegisterComponent, canDeactivate: [CanActivateDeactivateService]},
    {path: 'change-password', component: ChangePasswordComponent, canDeactivate: [CanActivateDeactivateService]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
