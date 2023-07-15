import { Component } from '@angular/core';
import { BlinkDirective } from './directives/blink.directive';
import { DialogDirective } from './directives/dialog.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BlinkDirective, DialogDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'angular';
  public btnColor = 'green';
}
