import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from '../page2/page2.component';
import { Page3Component } from '../page3/page3.component';
import { AuthService, AuthServiceTest } from 'src/app/services/auth.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule, Page2Component, Page3Component],
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  providers: [
    {
      provide: Page2Component,
      useClass: Page2Component,
    }
  ]
})
export class Page1Component {
  public title: string = 'P1 Component';

  constructor(private app: AppComponent, private page2: Page2Component) {
  }

  click() {
    console.log('avant', this.page2.title);
    this.page2.title = 'New title';
    console.log('après', this.page2.title);
  }
}
