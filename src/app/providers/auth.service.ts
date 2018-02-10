import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ToDo } from '../models/models';

@Injectable()
export class AuthService {
  userInfo: any;
  todoCollection: AngularFirestoreCollection<ToDo>;
  toDos: Observable<ToDo[]>;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private zone: NgZone,
    public afs: AngularFirestore
  ) {
    this.todoCollection = afs.collection<ToDo>('to-do');
    this.toDos = this.todoCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ToDo;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  isUserSignedIn() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userInfo = user;
        return this.userInfo;
      } else {
        this.router.navigate(['']);
      }
    });
  }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth
      .signInWithPopup(provider)
      .then(result => {
        // const signInInfo = {
        const token = result.credential.accessToken;
        const user = result.user;
        this.zone.run(() => {
          this.router.navigate(['dashboard']);
        });

        // };
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

  signOut() {
    this.afAuth.auth
      .signOut()
      .then(() => {
        this.router.navigate(['']);
      })
      .catch(error => {
        console.log(error);
      });
  }

  fetchData() {
    return this.toDos;
  }
}
