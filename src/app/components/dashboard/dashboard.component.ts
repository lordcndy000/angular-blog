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
  userInfo: any;
  constructor(public afService: AuthService, private router: Router) {}

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userInfo = user;
      }
    });
  }
}
