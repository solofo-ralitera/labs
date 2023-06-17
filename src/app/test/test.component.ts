import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TestComponent {
  @Input({
    alias: 'inputval',
    required: false,
  })
  text: string;

  @Output() 
  onButtonCLick: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.text = 'default';
    window.setInterval(() => {
      this.text += '1';
      this.onButtonCLick.emit(this.text);
    }, 2000);
  }

}
