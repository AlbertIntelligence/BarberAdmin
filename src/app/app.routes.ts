
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }         from './app.component';
import { DashboardComponent }  from './pages/Dashboard/DashBoardController';
import { LoginComponent }      from './pages/Login/login';
import { RegisterComponent }      from './pages/Register/Register';
import { SettingsComponent }   from './pages/Settings/settings';


export const routes: Routes = [
  { path: 'appcomponent', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
