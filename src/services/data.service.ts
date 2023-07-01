import { IUserService } from "./user.service";

export class DataService implements IUserService {
  constructor() {
    console.log('DataService created');
  }

  public getUserName(): Promise<string> {
    return Promise.resolve('Data');
  }
}
