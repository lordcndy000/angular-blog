import { Component, OnInit, animate } from '@angular/core';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public afService: AuthService) {}

  ngOnInit() {}
  onSignInClick() {
    const signInUser = this.afService.signInWithGoogle();
  }
}
