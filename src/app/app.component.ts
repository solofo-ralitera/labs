import { Component } from '@angular/core';
import { TestComponent } from './test/test.component';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TestComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular';
  counter: number = 0;

  vartest() {
    return 'eeeee';
  } 

  constructor() {
    window.setInterval(() => {
      this.counter++;
    }, 1000)
  }

  public testClick(e: unknown): void {
    console.log(e);
    console.log('Click')
  }
  
  public changed(): void {
    console.log('changed')
  }

  public logEvent(text: string): void {
    console.log(text);
  }

  public getText(): string {
    return 'zzeze';
  }
}
