export class Main implements ITest {
  constructor() {
    console.log('Construct');
  }

  log(): string {
    return 'azeaze';
  }
}


export interface ITest {
  log(): string ;
}
