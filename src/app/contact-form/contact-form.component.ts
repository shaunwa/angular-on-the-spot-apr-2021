import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
    email = '';
    name = '';
    message = '';

    constructor() { }

    ngOnInit(): void {
    }

    submitClicked(): void {
        alert(`Email: ${this.email}, Name: ${this.name}, Message: ${this.message}`);
    }
}
