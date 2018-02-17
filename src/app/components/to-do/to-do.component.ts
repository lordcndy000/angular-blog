import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../providers/firebase.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToDo } from '../../models/models';
import * as firebase from 'firebase/app';
import * as _moment from 'moment-timezone';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material';
import { AddToDoSuccessComponent } from '../popups/snackbar/snackbars/snackbars.component';
import { AddToDoFailedComponent } from '../popups/snackbar/snackbars/snackbars.component';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  addToDoForm: FormGroup;
  titleFormControl: FormControl;
  startDateFormControl: FormControl;
  dueDateFormControl: FormControl;
  notesFormControl: FormControl;
  addTaskState: Boolean;
  userInfo;
  prio = false;
  star = false;
  minDate = _moment()
    .tz('Asia/Manila')
    .format('YYYY-MM-DD');
  maxDate = _moment()
    .tz('Asia/Manila')
    .year(2020)
    .month(12)
    .date(31)
    .format('YYYY-MM-DD');

  todoList: ToDo[];

  addTodo: ToDo = {
    title: '',
    start: '',
    due: '',
    notes: '',
    priority: false,
    starred: false,
    done: false,
    by: ''
  };

  constructor(
    public afService: FirebaseService,
    private router: Router,
    public snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.addTodo.by = user.email;
      }
    });
    this.afService.isUserSignedIn();

    this.createAddToDoForm();

    this.printTodos();
  }

  printTodos() {
    this.afService.fetchData().subscribe(todos => {
      this.todoList = todos;
    });
  }

  createAddToDoForm() {
    // this.addToDoForm = new FormGroup({
    this.titleFormControl = new FormControl('', Validators.required);
    this.startDateFormControl = new FormControl('', Validators.required);
    this.dueDateFormControl = new FormControl('', Validators.required);
    this.notesFormControl = new FormControl('', Validators.required); // });
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
    const startDate = `${this.addTodo.start._i.month + 1}/${
      this.addTodo.start._i.date
    }/${this.addTodo.start._i.year}`;
    const dueDate = `${this.addTodo.due._i.month + 1}/${
      this.addTodo.due._i.date
    }/${this.addTodo.due._i.year}`;

    const toDoData = {
      title: this.addTodo.title,
      start: startDate,
      due: dueDate,
      notes: this.addTodo.notes,
      priority: this.prio,
      starred: this.star,
      done: this.addTodo.done,
      by: this.addTodo.by
    };

    if (!this.afService.pushData(toDoData)) {
      this.snackbar.openFromComponent(AddToDoSuccessComponent, {
        duration: 1000
      });
    } else {
      this.snackbar.openFromComponent(AddToDoFailedComponent, {
        duration: 1000
      });
    }
  }
}
