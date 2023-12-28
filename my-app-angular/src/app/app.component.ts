import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  count: number = 0;
  increse() {
    this.count++;
  }
  decrese() {
    this.count--;
  }
}
