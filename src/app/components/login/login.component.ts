import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../providers/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public afService: FirebaseService, private router: Router) {}

  ngOnInit() {}
  onSignInClick() {
    this.afService.signInWithGoogle();
  }
}
