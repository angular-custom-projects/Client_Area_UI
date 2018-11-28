import {Component, OnInit, ViewChild} from '@angular/core';
import {CanComponentDeactivate} from "../../guards/can-activate-deactivate.service";
import {Observable} from "rxjs/index";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-reset-password-s1',
    templateUrl: './reset-password-s1.component.html',
    styleUrls: ['./reset-password-s1.component.scss']
})
export class ResetPasswordS1Component implements OnInit, CanComponentDeactivate {
    // get the registration form using view child
    @ViewChild('f') form: NgForm;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    // run the following function when the user submit his email
    submitEmail() {
        console.log('Email: ', this.form.value.email);
        this.form.reset();
        this.router.navigate(['/forgot-password-step-two']);
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
