import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import AuthGuard from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'auth/gogle',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'users/register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/erro404/erro404.component').then(m => m.Erro404Component)
  }
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})

export class AppRoutingModule {}
