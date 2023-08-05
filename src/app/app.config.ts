import { ApplicationConfig, inject } from '@angular/core';
import { Route, Routes, provideRouter } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page3Component } from './pages/page3/page3.component';
import { Page2Component } from './pages/page2/page2.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthService, AuthServiceTest } from './services/auth.service';

const routes: Routes = [
  {
    path: 'page1', 
    loadComponent: () => import('./pages/page1/page1.component').then(c => c.Page1Component),
    title: () => {
      return 'fn';
    },
    providers: [],
    canMatch: [(): boolean => {
      return true;
    }],
  },
  {
    path: 'page2', loadComponent: () => import('./pages/page2/page2.component').then(c => c.Page2Component),
    canDeactivate: [(): boolean => {
      return true;
    }]    
  },
  {
    path: 'page3', loadComponent: () => import('./pages/page3/page3.component').then(c => c.Page3Component)
  },
  {
    path: 'page3/:id', loadComponent: () => import('./pages/page3/child/child.component').then(c => c.ChildComponent)
  },  
  {
    path:'**', loadComponent: () => import('./pages/notfound/notfound.component').then(c => c.NotfoundComponent)
  }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
};
