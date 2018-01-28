import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public afService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isUserSignedIn();
  }

  isUserSignedIn() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
      } else {
        this.router.navigate(['']);
      }
    });
  }
  onSignOutClick() {
    this.afService.signOut();
  }
}
