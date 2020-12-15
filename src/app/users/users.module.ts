import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent, ChatRoomComponent],
  imports: [
    CommonModule,
  
  ],
  exports:[
LoginComponent,
SignupComponent,

  ]
})
export class UsersModule { }
