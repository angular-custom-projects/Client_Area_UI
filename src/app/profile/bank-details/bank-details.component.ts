import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {
    // set countries for the dropdown
    countries: any = ['Malaysia', 'Cyprus', 'Africa', 'United States of America', 'United Kingdom'];
    // set the default country of the dropdown
    currentCountry = 'Malaysia';
    // used to show a confirmation message to the client
    error = false;
    success = false;

  constructor() { }

  ngOnInit() {
  }

    onSubmit() {

    }

}
