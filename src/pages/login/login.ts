import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'login.html'
})
export class LoginComponent {

  email: any = '';
  password: any = '';
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private router: Router) {
    this.user = this.afAuth.authState;
  }
  /*****************************************************************************
   Function: loginUser
   Purpose: Validate the entries and logs the user in.
   Parameters: None
   Return: None
   *****************************************************************************/
  login() {
    if (this.email.length === 0 || this.password.length === 0) {
      alert('Authentification Impossible ! Veuillez remplir tous les champs.');
    } else {
      this.logout();
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
      if (this.isLoggedIn()) {this.goToDashBoard(); }
      alert('Authentification Impossible !' + error.toString().substring(7, error.toString().length));
    });
    }
  }

  logout(): firebase.Promise<void> {
    return firebase.auth().signOut();
  }

  resetPassword(email: string): firebase.Promise<any> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  isLoggedIn(): Boolean {
    const user = firebase.auth().currentUser;
    return (user != null && user !== undefined) ? true : false;
  }

  goToDashBoard() {
    this.router.navigate(['dashboard']);
  }

  goToRegisterPage() {
    alert('im in fucker');
  }



}
