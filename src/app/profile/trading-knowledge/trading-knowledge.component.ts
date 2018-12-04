import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-trading-knowledge',
    templateUrl: './trading-knowledge.component.html',
    styleUrls: ['./trading-knowledge.component.scss']
})
export class TradingKnowledgeComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        // this.router.navigate(['/profile/financial-background']);
        // window.scrollTo(0, 0);
        console.log(form);
    }
}