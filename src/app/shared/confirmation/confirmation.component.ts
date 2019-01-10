import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
    error = false;
    success = false;
    @Input() messageText: '';
    @Input() messageType = '';
    @Output() closeM = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    closeMessage(type: string) {
        if (type === 'error') {
            this.error = false;
            this.closeM.emit(this.error);
        } else if (type === 'success') {
            this.success = false;
            this.closeM.emit(this.success);
        }
    }

}
