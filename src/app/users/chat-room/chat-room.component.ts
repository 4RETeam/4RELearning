import { literalArr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  data=[{
    id:1,
    sms:"wwwww",
  },
  {
    id:2,
    sms:"wwwww1",
  },
  {
    id:3,
    sms:"wwwww2",
  },
  {
    id:4,
    sms:"wwwww3",
  }]
  i=5;
  lol={id:this.i,sms:'qq'}
  pushValue(val:string){
    this.lol.sms=val;
    this.data.push(this.lol);
    console.log(this.lol);
    console.log(this.data);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
