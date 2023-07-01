import { AfterViewInit, Component, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from '../test2/test2.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements AfterViewInit {
  @ContentChild(Test2Component)
  child!: Test2Component;

  ngAfterViewInit(): void {
  }

}
