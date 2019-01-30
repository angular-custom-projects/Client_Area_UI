import { Component, OnInit, ViewChild } from '@angular/core';
import { CanComponentDeactivate } from '../../guards/can-activate-deactivate.service';
import { Observable } from 'rxjs/index';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, CanComponentDeactivate {
  // get the form of email / username using view child
  @ViewChild('f') form: NgForm;

  // get the reset password form using view child
  @ViewChild('resPass') resPassForm: NgForm;

  // the following variable will be used to check if the URL has a token or not so that the user will be able to reset his password
  hasToken = false;

  // the following variable will be used to store the token from the URL
  resetPassToken: string;

  // the following will be used to display the correct confirmation message if the email or username has been sent successfully
  successEmail = false;
  errorEmail = false;

  // show the correct confirmation message after submitting the email
  emailConfirmationMessage = '';

  // the following will be used to display the correct confirmation message if the password has been reset correctly
  successPass = false;
  errorPass = false;

  // show the correct confirmation message after submitting the new password
  passConfirmationMessage = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.resetPassToken = params['token'];
      this.hasToken = params['token'] != null;
    });
  }

  // run the following function when the user submit his email
  submitEmail() {
    const username = this.form.value.username;
    this.authService.forgotPassword({ username }).subscribe(
      data => {
        this.successEmail = true;
        this.emailConfirmationMessage = data['data'];
      },
      error => {
        console.log(error);
        this.errorEmail = true;
      }
    );
    this.form.onReset();
  }

  // run the following function if the URL has a valid token which will be used to reset the client password
  resetPassword() {
    const token = this.resetPassToken;
    const password = this.resPassForm.value.password;
    const confirm_password = this.resPassForm.value.confirmPass;
    const resetPasswordData = {
      newPassword: password,
      confirmPassword: confirm_password
    };
    this.authService.resetPassword(token, resetPasswordData).subscribe(
      response => {
        this.successPass = true;
        this.passConfirmationMessage = response['data'];
      },
      error => {
        this.errorPass = true;
        this.passConfirmationMessage = error['error'].errors;
      }
    );
    this.resPassForm.onReset();
  }

  closeErrorMessageEmail(type: boolean) {
    this.errorEmail = type;
  }

  closeSuccessMessageEmail(type: boolean) {
    this.successEmail = type;
  }

  closeErrorMessagePass(type: boolean) {
    this.errorPass = type;
  }

  closeSuccessMessagePass(type: boolean) {
    this.successPass = type;
  }

  // run the following function if the user tries to navigate away without submitting his data
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.form) {
      if (!this.form.touched) {
        return true;
      }

      if (this.form.dirty) {
        return confirm('Do you want to discard the changes?');
      } else {
        return true;
      }
    }

    if (this.resPassForm) {
      if (!this.resPassForm.touched) {
        return true;
      }

      if (this.resPassForm.dirty) {
        return confirm('Do you want to discard the changes?');
      } else {
        return true;
      }
    }
  }
}
