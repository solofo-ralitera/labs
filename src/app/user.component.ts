import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>User works : {{userService.connectedUserName}}</div>
  `,
  styleUrls: [],
  providers: [
    /* {
      provide: UserService,
      useClass: UserService,
    }, */
  ]
})
export class UserComponent {
  public userService: UserService;

  constructor() {
    this.userService = inject(UserService);
  }
}
