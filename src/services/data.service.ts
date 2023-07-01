import { Injectable } from "@angular/core";
import { IUserService } from "./user.service";

@Injectable({
  providedIn: 'root',
})
export class DataService implements IUserService {
  constructor() {
    console.log('DataService created');
  }

  public getUserName(): Promise<string> {
    return Promise.resolve('Data');
  }
}
