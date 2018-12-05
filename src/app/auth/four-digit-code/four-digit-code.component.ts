import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-four-digit-code',
    templateUrl: './four-digit-code.component.html',
    styleUrls: ['./four-digit-code.component.scss']
})
export class FourDigitCodeComponent implements OnInit {
    @ViewChild('f') form: NgForm;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onVerify(form: NgForm) {
        this.router.navigate(['/dashboard']);
        console.log(form.value.digitCode);

    }

}