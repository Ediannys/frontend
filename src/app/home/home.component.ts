import { Component, OnInit } from '@angular/core';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openLogin(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(SignInComponent, dialogConfig);
  }

  openRegistrar(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(SignUpComponent, dialogConfig);
  }
}
