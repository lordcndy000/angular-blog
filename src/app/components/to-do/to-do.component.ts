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

  addTodoFields: ToDo = {
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
        this.addTodoFields.by = user.email;
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
    // this.addTodoFieldsForm = new FormGroup({
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
    if (this.addTodoFields.priority === false) {
      this.addTodoFields.priority = true;
    } else {
      this.addTodoFields.priority = false;
    }
  }

  toggleStar() {
    if (this.addTodoFields.starred === false) {
      this.addTodoFields.starred = true;
    } else {
      this.addTodoFields.starred = false;
    }
  }

  submitAdd() {
    const startDate = `${this.addTodoFields.start._i.month + 1}/${
      this.addTodoFields.start._i.date
    }/${this.addTodoFields.start._i.year}`;
    const dueDate = `${this.addTodoFields.due._i.month + 1}/${
      this.addTodoFields.due._i.date
    }/${this.addTodoFields.due._i.year}`;

    const toDoData = {
      title: this.addTodoFields.title,
      start: startDate,
      due: dueDate,
      notes: this.addTodoFields.notes,
      priority: this.addTodoFields.priority,
      starred: this.addTodoFields.starred,
      done: this.addTodoFields.done,
      by: this.addTodoFields.by
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
