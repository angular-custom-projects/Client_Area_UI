import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-financial-background',
    templateUrl: './financial-background.component.html',
    styleUrls: ['./financial-background.component.scss']
})
export class FinancialBackgroundComponent implements OnInit {
    // Set A (upper part) of Multiple Choice Question
    questionsSetA = [
        {
            question: 'Intended Purpose of Trading',
            choices: [
                'Hedging',
                'Investment',
                'Speculative',
                'Diversification',
                'Create an additional source of income'
            ],
            name: 'question_1'
        },
        {
            question: 'Employment Status',
            choices: [
                'Unemployed',
                'Student',
                'Retired',
                'Employed',
                'Self-Employed'
            ],
            name: 'question_2'
        },
    ]

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

    //Set B (bottom part) of Multiple Choice Question
    questionsSetB = [
        {
            question: 'Estimated Net Worth (USD)',
            choices: [
                'Less than 0',
                '0 - 25,000',
                '25,000 - 75,000',
                '75,000 - 150,000',
                'Over 150,000',
            ],
            name: 'question_4'
        },
        {
            question: 'Estimated Annual Income (USD)',
            choices: [
                'Less than 10,000',
                '10,000 - 50,000',
                '50,000 - 100,000',
                'Over 150,000'
            ],
            name: 'question_5'
        },
        {
            question: 'Estimated Investment Amount (USD)',
            choices: [
                '100 - 25,000',
                '25,000 - 50,000',
                '50,000 - 100,000',
                'Over 100,000'
            ],
            name: 'question_6'
        },
        {
            question: 'Source of Funds',
            choices: [
                'Employment',
                'Savings and Investments',
                'Inheritance and gift',
                'Loan'
            ],
            name: 'question_7'
        },
        {
            question: 'Derivative products are a suitable part of my investment objectives and risk appetite. I am able to assess the risk involved in trading them including the possibility that I may lose all of my invested capital.',
            choices: [
                'Yes',
                'no'
            ],
            name: 'question_8'
        },
        {
            question: 'Select Account Type',
            choices: [
                'Variable Spread',
                'ECN Premier Spread'
            ],
            name: 'question_9'
        },
        {
            question: 'Select Deposit Currency',
            choices: [
                'USD',
                'EUR',
                'GBP',
                'SGD',
                'PLN'
            ],
            name: 'question_10'
        }
    ]

    constructor() { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log(form);
    }

}
