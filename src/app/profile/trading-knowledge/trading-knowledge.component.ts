import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-trading-knowledge',
    templateUrl: './trading-knowledge.component.html',
    styleUrls: ['./trading-knowledge.component.scss']
})
export class TradingKnowledgeComponent implements OnInit {
    questions = [
        {
            question: 'If the Google share that is traded through Nasdaq drops significantly, the price of the Google CFD (Contract for Difference) you bought will:',
            choices: [
                'Move in the same direction',
                'Move in the opposite direction',
                'Not be affected'
            ],
            name: 'question_1'
        },
        {
            question: 'If you buy EXXON MOBIL stock through FXPRIMUS’ trading platform, where can you sell it in the future:',
            choices: [
                'Only through FXPRIMUS\' trading account',
                'In the New York Stock Exchange',
                'You cannot sell it'
            ],
            name: 'question_2'
        },
        {
            question: 'Which of the following statements is correct regarding CFD trading:',
            choices: [
                'You never own the actual asset',
                'CFDs are complex financial products',
                'Both of the above',
                'None'
            ],
            name: 'question_3'
        },
        {
            question: 'When trading with leverage, which one of the following applies:',
            choices: [
                'It may increase profits or losses',
                'It is risk free',
                'None of the above'
            ],
            name: 'question_4'
        },
        {
            question: 'If you have in your account USD100 and you trade with 1:50 leverage in your account, which one is the maximum value of trade you can open?',
            choices: [
                'USD 5,000',
                'USD 50,000',
                'USD 500'
            ],
            name: 'question_5'
        },
        {
            question: 'What is your level of education?',
            choices: [
                'Professional Qualification',
                'University / College',
                'Secondary Education',
                'Primary Education',
                'No Education'
            ],
            name: 'question_6'
        },
        {
            question: 'What is your trading experience?',
            choices: [
                'I have traded forex with leverage',
                'I have traded shares, bonds, indices and commodities with leverage',
                'I have traded both of the above',
                'None of the above',
            ],
            name: 'question_7'
        },
        {
            question: 'How often have you traded the past 2 years?',
            choices: [
                'Daily or Weekly',
                'Monthly or Quarterly',
                'Annually',
                'None of the above',
            ],
            name: 'question_8'
        },
        {
            question: 'What is the volume of your transactions you have traded the past 2 years?',
            choices: [
                'Over USD 50,000',
                'USD 1,000 - USD 50,000',
                'Less than USD 1,000',
                'None',
            ],
            name: 'question_9'
        },
        {
            question: 'During the past 2 years I have:',
            choices: [
                'Worked in a related role in the financial industry',
                'Attended relevant seminars and tutorials related to trading',
                'Performed both of the above',
                'None of the above',
            ],
            name: 'question_10'
        },
    ]

    constructor() { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log(form);
    }
}
