import { Component } from '@angular/core';
import { BlinkDirective } from './directives/blink.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BlinkDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}
