import { Injectable } from "@angular/core";

export interface IUserService {
  getUserName(): Promise<string>;
}

@Injectable({
  providedIn: 'root',
})
export class UserService implements IUserService {
  public connectedUserName: string = '';

  constructor() {
    console.log('Create user service');
    this.getUserName();
  }

  public getUserName(): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        this.connectedUserName = 'Solofo';
        return resolve('Solofo');
      }, 1000);
    });
  }
}
