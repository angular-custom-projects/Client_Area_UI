import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
    selector: 'app-verification-stepper',
    templateUrl: './verification-stepper.component.html',
    styleUrls: ['./verification-stepper.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class VerificationStepperComponent implements OnInit {
    @ViewChild('stepper') stepper: MatStepper;

    stepperLabels = [
        'Email Verification',
        'Profile Details',
        'Questionnaire',
        'bank Details'
    ]

    isCompleted: any = [
        {email: false},
        {profile: false},
        {question: false},
        {bank: false},
    ]

    constructor() { }

    ngOnInit() {
        this.isCompleted.profile = true;
        this.stepper.selectedIndex = 1;
    }

    // function to move stepper to next step
    // function(stepper) {
    //     this.isCompleted.profile = true;
    //     stepper.selectedIndex = 1;
    // }
}