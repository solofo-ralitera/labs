import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TestComponent, Test2Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}
