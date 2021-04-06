import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {
    @Input() author = "";
    @Input() content = "";

    constructor() { }

    ngOnInit(): void {
    }

}
