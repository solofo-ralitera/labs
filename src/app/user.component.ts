import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>User works</div>
  `,
  styleUrls: [],
  providers: [

  ]
})
export class UserComponent {
  // public userService: UserService;

  constructor(public userService: UserService) {
    // this.userService = inject('UserService');
    console.log(this.userService);
  }
}
