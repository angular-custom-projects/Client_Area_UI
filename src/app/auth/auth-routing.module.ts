import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { CanActivateLoginService } from '../guards/can-activate-login.service';
import { CanActivateDeactivateService } from '../guards/can-activate-deactivate.service';
import { FourDigitCodeComponent } from './four-digit-code/four-digit-code.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CanActivateLoginService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canDeactivate: [CanActivateDeactivateService],
    canActivate: [CanActivateLoginService]
  },
  {
    path: 'forgot-password',
    component: ResetPasswordComponent,
    canActivate: [CanActivateLoginService],
    canDeactivate: [CanActivateDeactivateService]
  },
  {
    path: 'forgot-password/:token',
    component: ResetPasswordComponent,
    canActivate: [CanActivateLoginService],
    canDeactivate: [CanActivateDeactivateService]
  },
  { path: '4-digit-code', component: FourDigitCodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
