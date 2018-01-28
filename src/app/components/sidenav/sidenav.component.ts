import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import * as firebase from 'firebase/app';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isOpen = false;
  userInfo;

  constructor(
    private afService: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userInfo = user;
        console.log(this.userInfo, 'side');
      }
    });
  }
  onCloseMenu() {
    const sidenavContainer = document.getElementById('sidenavContainer');
    document.body.classList.add('menu-collapsed');
    sidenavContainer.classList.add('closed-side');
    this.isOpen = true;
    this.onHoverMenu();
  }

  enterEvent() {
    const sidenavContainer = document.getElementById('sidenavContainer');
    sidenavContainer.classList.remove('closed-side');
    document.body.classList.remove('menu-collapsed');
  }
  leaveEvent() {
    const sidenavContainer = document.getElementById('sidenavContainer');
    sidenavContainer.classList.add('closed-side');
    document.body.classList.add('menu-collapsed');
  }
  onHoverMenu() {
    const sidenavContainer = document.getElementById('sidenavContainer');
    if (this.isOpen === true) {
      sidenavContainer.addEventListener('mouseenter', this.enterEvent);
      sidenavContainer.addEventListener('mouseleave', this.leaveEvent);
    }
  }
  onOpenMenu() {
    const sidenavContainer = document.getElementById('sidenavContainer');
    sidenavContainer.classList.remove('closed-side');
    this.isOpen = false;
    this.removeEvents();
  }
  removeEvents() {
    const sidenavContainer = document.getElementById('sidenavContainer');
    document.body.classList.remove('menu-collapsed');
    sidenavContainer.removeEventListener('mouseenter', this.enterEvent);
    sidenavContainer.removeEventListener('mouseleave', this.leaveEvent);
  }
}
