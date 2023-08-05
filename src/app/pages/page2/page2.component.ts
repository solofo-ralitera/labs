import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, AuthServiceTest } from 'src/app/services/auth.service';
import { Page1Component } from '../page1/page1.component';
import { Page3Component } from '../page3/page3.component';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  providers: [
  ]
})
export class Page2Component {
  public int: number = 0;

  constructor(public c1: Page1Component) {
  }
}
