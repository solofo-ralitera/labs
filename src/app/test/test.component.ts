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
  @Input()
  text: string = '';

  @Output()
  textChange: EventEmitter<string> = new EventEmitter();

  @Output() 
  onButtonCLick: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  changeText(e: Event) {
    this.textChange.emit((e.target as HTMLInputElement).value);
  }
}
