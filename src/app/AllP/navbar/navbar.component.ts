import { Component, OnInit,} from '@angular/core';
import  {UsersModule} from '../../users/users.module';
import {MatDialog} from '@angular/material/dialog'
import { LoginComponent } from 'src/app/users/login/login.component';
import { SignupComponent } from 'src/app/users/signup/signup.component';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  

  constructor(public dialog: MatDialog) {}

  openDialogL(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  openDialogR(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '250px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  getValue(val:string) {
    console.warn(val);
    }
  ngOnInit(): void {
   
  }

}
