import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    onSignin(form: NgForm) {
        const username = form.value.username;
        const password = form.value.password;
        this.authService.loginUser({username, password});
    }
}
