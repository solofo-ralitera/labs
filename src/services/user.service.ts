import { Injectable, InjectionToken } from "@angular/core";
import { DataService } from "./data.service";

export interface IUserService {
  getUserName(): Promise<string>;
}

// export const USER_SERVICE_TOKEN = new InjectionToken<IUserService>('User service token');

@Injectable({
  providedIn: 'root',
})
export class UserService implements IUserService {
  public connectedUserName: string = '';

  constructor(public dataService: DataService) {
    console.log('Create user service');
    this.getUserName();
    this.dataService.getUserName().then(() => {
      console.log('Icicicicic');
    })
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
