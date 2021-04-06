import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  count = 0;
  constructor() { }

  incrementCount(): void {
      this.count += 1;
  }

  resetCount(): void {
      this.count = 0;
  }

  ngOnInit(): void {
  }

}
