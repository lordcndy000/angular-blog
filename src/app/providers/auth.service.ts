import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  signInWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        const signInInfo = {
          token: result.credential.accessToken,
          user: result.user
        };
        return signInInfo;
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.log(errorMessage);
      });
  }
}
