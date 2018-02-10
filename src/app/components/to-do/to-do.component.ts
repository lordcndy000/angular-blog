import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  addTaskState: Boolean;
  isDone: any;

  constructor(public afService: AuthService, private router: Router) {}

  ngOnInit() {
    this.afService.isUserSignedIn();
  }

  openAddTaskForm() {
    this.addTaskState = true;
  }

  closeAddTaskForm() {
    this.addTaskState = false;
  }
}
