import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import {DashboardComponent} from '../pages/dashboard/dashboard';
import {ListItemComponent} from '../pages/reservation-list-item/reservation-list-item';
import {LoginComponent} from '../pages/login/login';
import {SettingsComponent} from '../pages/settings/settings';
import {RegisterComponent} from '../pages/register/register';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
import { ReactiveFormsModule } from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { VirtualScrollModule } from 'angular2-virtual-scroll';


enableProdMode();





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SettingsComponent,
    ListItemComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule,
    ReactiveFormsModule,
    VirtualScrollModule



  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule {
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBShXmN6TIS7xy2Tnr65NkCJbAEXM51g7Q',
      authDomain: 'mpc-app-37f6f.firebaseapp.com',
      databaseURL: 'https://mpc-app-37f6f.firebaseio.com',
      projectId: 'mpc-app-37f6f',
      storageBucket: 'mpc-app-37f6f.appspot.com',
      messagingSenderId: '351355658098'
    });
  }
}


