import { Component, OnInit } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbars',
  templateUrl: './snackbars.component.html',
  styleUrls: ['./snackbars.component.css']
})
export class AddToDoSuccessComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: 'app-snackbars',
  template: `<span>Something when wrong. Please try again<mat-icon>error</mat-icon></span>`,
  styleUrls: ['./snackbars.component.css']
})
export class AddToDoFailedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
