import { Injectable } from '@angular/core';

export class AuthService {

  constructor() { }

  public isLogged(): boolean {
    console.log('AuthService is logged');
    return true;
  }
}


export class AuthServiceTest {

  constructor() { }

  public isLogged(): boolean {
    console.log('AuthServiceTest is logged');
    return false;
  }
}
