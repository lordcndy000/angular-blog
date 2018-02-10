import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public afService: AuthService, private router: Router) {}

  ngOnInit() {}
  onSignInClick() {
    this.afService.signInWithGoogle();
  }
}
