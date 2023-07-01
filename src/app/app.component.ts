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
  obj = {
    title: 'Angular'
  };

  constructor(private cdr: ChangeDetectorRef) {

  }

  changeTitle() {
    this.obj = {...this.obj, title: 'New title'};
    this.cdr.detectChanges();
  }

}
