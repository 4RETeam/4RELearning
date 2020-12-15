import { Component } from '@angular/core';
import { UsersService } from './users.service';
import  {UsersModule} from './users/users.module';
import {MatDialog} from '@angular/material/dialog'
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor() {}




//   this.user.getData().subscribe(data=>{
//     console.warn(data);
//   })
// }
 
//   title = 'Люби ее и может быть вы когдато будете вместе, но будь уверен,что путь твой не будет так прост, даже приняв все сложности это лишь малая часть, что тебе предстоит пройти, но награду ты сам знаешь, точнее ты сам знаешь, что награды не будет, любовь это не заслуга достижений, это работа, что нужно выполнить.';
//   name = 'Podpis Vlad i moje serdce';

//   test() {
//     return (this.name + ' ' + 'ti smozes');
//   }
//   obj = {
//     name: 'kelly',
//     age: '20'
//   }
//   currentVal = '';
//   arr = ['wdq', 'wqdqw', 'qwdqwdqw'];
//   siteUrl = window.location.href;
//   getName() {
//     alert(this.name);
//   }
//   myEvent(evt: string) {
//     console.warn(evt);
//   }
//   getValue(val: string) {
//     console.warn(val);
//     this.currentVal = val;
//   }
//   disabledBox = true;
//   enableBox() {
//     this.disabledBox = false;

//   }
//   show = 'blue';
//   color='nur';
  
//   data=[
// {
//   name:'anil',
//   age:'22'
// },
// {
//   name:'assss',
//   age:'224'
// },{
//   name:'adadadadad',
//   age:'2'
// }

//   ]
//   getVal(val:object){
// console.warn(val);
//   }
}
