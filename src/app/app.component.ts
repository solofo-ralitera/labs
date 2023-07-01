import { Component, Inject, inject } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { IUserService, UserService } from 'src/services/user.service';
import { UserComponent } from './user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: UserService,
      useClass: UserService,
    },
    // DataService,
  ]
})
export class AppComponent {
  title = 'angular';
  public userName: string = '';
  // public dataService: DataService = inject(DataService);

  constructor(
    public userService: UserService,
  ) {
  }

}
