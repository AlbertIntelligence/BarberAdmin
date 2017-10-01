import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from '../pages/dashboard/dashboard';
import {LoginComponent} from '../pages/login/login';
import {SettingsComponent} from '../pages/settings/settings';
import {RegisterComponent} from '../pages/register/register';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'login', component: LoginComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
