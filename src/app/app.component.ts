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
export class AppComponent {
  counter: number = 0;
  title: string = 'angular';
  obj: {
    text: string,
    counter: number,
  } = {
    text: 'Hello',
    counter: 0,
  };

  testClick() {
    this.obj = {...this.obj, text: 'Coco'};
  }
}
