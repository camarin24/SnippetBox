import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './../Components/Home/home.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent, }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);