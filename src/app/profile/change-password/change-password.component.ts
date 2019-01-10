import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
// get the registration form using view child
    @ViewChild('f') form: NgForm;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    // run the following function when the user submit his email
    changePassword() {
        console.log('Password: ', this.form.value.password);
        this.form.reset();
        this.router.navigate(['/']);
    }

    // run the following function if the user tries to navigate away without submitting his data
    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.form.touched) {
            return true;
        }

        if (this.form.dirty) {
            return confirm('Do you want to discard the changes?');
        } else {
            return true;
        }
    }
}
