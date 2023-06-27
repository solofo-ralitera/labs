import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
  @Input() title: {
    text: string,
    counter: number,
  } = {
    text: 'Hello',
    counter: 0,
  };

  @Input()
  text: string = '';

  @Output()
  textChange: EventEmitter<string> = new EventEmitter();

  timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  changeText() {
    this.timeout(0).then(v => {
      this.title.text = 'Text changed';
      console.log(this.title);
   });

  }
}
