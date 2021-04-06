import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
  @Input() count = 0;
  @Output() counterClicked = new EventEmitter();
  @Output() resetClicked = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  buttonClicked(): void {
      this.counterClicked.emit();
  }

  resetCount(): void {
      this.resetClicked.emit();
  }
}
