import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import {DashboardComponent} from '../pages/dashboard/dashboard';
import {LoginComponent} from '../pages/login/login';
import {SettingsComponent} from '../pages/settings/settings';
import {RegisterComponent} from '../pages/register/register';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SettingsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule
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


