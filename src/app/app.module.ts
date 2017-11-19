import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }         from './app.component';
import { AlertComponent }   from './pages/Alert/alert';
import { DashboardComponent }  from './pages/Dashboard/DashBoardController';
import { LoginComponent }      from './pages/Login/login';
import { RegisterComponent }      from './pages/Register/Register';
import { SettingsComponent }          from './pages/Settings/settings';
import { ReactiveFormsModule } from '@angular/forms';
//import * as firebase from 'firebase';
import { routing } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
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
