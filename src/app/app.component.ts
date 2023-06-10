import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular';
  counter: number = 0;

  constructor() {
    window.setInterval(() => {
      this.counter++;
    }, 1000)
  }
  
}
