import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToDo } from '../../models/models';
import * as firebase from 'firebase/app';
import * as _moment from 'moment';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  addToDoForm: FormGroup;
  addTaskState: Boolean;
  prio = false;
  star = false;
  minDate = _moment().format('YYYY-MM-DD');
  maxDate = _moment()
    .year(2020)
    .month(12)
    .date(31)
    .format('YYYY-MM-DD');

  todoList: ToDo[];

  constructor(public afService: AuthService, private router: Router) {}

  ngOnInit() {
    this.afService.isUserSignedIn();
    this.createAddToDoForm();

    this.printTodos();
  }

  printTodos() {
    this.afService.fetchData().subscribe(todos => {
      this.todoList = todos;
      console.log(this.todoList);
    });
  }

  createAddToDoForm() {
    this.addToDoForm = new FormGroup({
      titleFormControl: new FormControl('', Validators.required),
      startDateFormControl: new FormControl('', Validators.required),
      dueDateFormControl: new FormControl('', Validators.required),
      notesFormControl: new FormControl('', Validators.required)
    });
  }

  openAddTaskForm() {
    this.addTaskState = true;
  }

  closeAddTaskForm() {
    this.addTaskState = false;
  }

  togglePrio() {
    if (this.prio === false) {
      this.prio = true;
    } else {
      this.prio = false;
    }
  }

  toggleStar() {
    if (this.star === false) {
      this.star = true;
    } else {
      this.star = false;
    }
  }

  submitAdd() {
    console.log('submitted');
  }
}
