import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-financial-background',
    templateUrl: './financial-background.component.html',
    styleUrls: ['./financial-background.component.scss']
})

export class FinancialBackgroundComponent implements OnInit {
    // Industry select dropdown
    value: string;
    viewValue: string;

    industries = [
        'Financial Services',
        'Agriculture, Food and Natural Resources',
        'Architecture and Construction',
        'Arts, Audio/Video Technology and Communications',
        'Business Management and Administration',
        'Education and Training',
        'Government and Public Administration',
        'Healthcare',
        'Hospitality and Tourism',
        'Information Technology',
        'Legal, Public Safety, Corrections and Security',
        'Manufacturing',
        'Marketing and Sales',
        'Science, Technology, Engineering and Mathematics',
        'Transportation, Distribution and Logistics',
        'Other'
    ];

    constructor() { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log(form);
    }

}
