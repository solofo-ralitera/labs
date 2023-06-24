import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TestComponent implements OnChanges {
  private _title: number = 0;
  @Input()
  set title(txt: number) {
    this._title = txt;
    // 
  };

  @Input()
  text: string = '';

  @Output()
  textChange: EventEmitter<string> = new EventEmitter();

  @Output() 
  onButtonCLick: EventEmitter<string> = new EventEmitter();

  constructor() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  changeText(e: Event) {
    this.textChange.emit((e.target as HTMLInputElement).value);
  }
}
