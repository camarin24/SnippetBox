import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './../Components/Home/home.component';
import {LoginComponent } from './../Components/Login/login.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'Login', component: LoginComponent, },

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);