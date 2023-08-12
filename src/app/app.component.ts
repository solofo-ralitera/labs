import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';


interface Article {
  id: number;
  title: number;
  summary: string;
  text: string;
}

type ArticlePart = Pick<Article, 'id' | 'title'>;

interface IUser {
  id: number;
  name: string;
  surname: string;
  roles: string[];
}

type TUser = {
  id: number
  name: string
}

class CUser implements IUser {
  public id: number = Math.random();
  public name: string = '';
  public surname: string = '';
  public roles: string[] = ['Authenticated'];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterLink, Page1Component, Page2Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular!!!';

  public createUser(): IUser {
    const newUser = new CUser();
    newUser.name = 'Test';
    console.log(newUser);
    return newUser;
  }

  public displayUser(user: IUser) {

  }
}
