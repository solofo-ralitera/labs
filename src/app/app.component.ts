import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  counter: number = 0;
  title: string = 'angular';
  obj: {
    text: string,
    counter: number,
  } = {
    text: 'Hello',
    counter: 0,
  };

  constructor() {
  }

 
  ngOnInit(): void {
    window.setInterval(() => {
      this.obj = {...this.obj, counter: ++this.obj.counter};
    }, 1000);
  }

  public testClick(): void {
    console.log(this.obj);
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
