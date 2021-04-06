import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @Input() person: any = {};
  @Input() personIndex: number = 0;
  @Output() personSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select(): void {
      this.personSelected.emit(this.personIndex);
  }

}
