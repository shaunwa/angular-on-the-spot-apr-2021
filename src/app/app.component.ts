import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
  styles: ['button { background-color: red; }'],
})
export class AppComponent {
    selectedPersonIndex = -1;
    people = [
        { name: 'Shaun' },
        { name: 'Bob', age: 32 },
        { name: 'Martha', age: 42 },
        { name: 'Susie', age: 50 },
    ];
    count = 0;

    selectPerson(index: number): void {
        this.selectedPersonIndex = index;
    }

    incrementCount(): void {
        this.count += 1;
    }

    resetCount(): void {
        this.count = 0;
    }
}
