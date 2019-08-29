import { Component, OnInit, Inject } from '@angular/core';
import { MessageData } from '../pojo-classes/MessageData';
import { BotChatService } from '../services/chatbotService/bot-chat.service';
import { BotResponse } from '../request-pojo-classes/botResponse';
import { LocalStorage1Service } from '../local-storage1.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bot-chat',
  templateUrl: './bot-chat.component.html',
  styleUrls: ['./bot-chat.component.css']
})
export class BotChatComponent implements OnInit {

  public messages:MessageData[];
  public formValue:String;
  public botResponse:BotResponse;

  constructor(public router: Router,public dialog: MatDialog,private _chatBotService:BotChatService,private _sessionService:LocalStorage1Service,private _snackBar: MatSnackBar) { }

  ngOnInit() {

    if(this._sessionService.getFromSession("user_id")){
      this._chatBotService.getMesagesList().subscribe(data=>this.messages=data);
    }
    else{
      console.log("Login in problem");
      this.router.navigate(['login']);
    }
    

  }
  sendMessage() {

    console.log("request: "+this.formValue);
    let chatMessage:MessageData = new MessageData("user",this.formValue);
    this._chatBotService.addNewMesaage(chatMessage).subscribe(function(data){

      this.botResponse=data;
      this._chatBotService.getMesagesList().subscribe(data=>this.messages=data);
    }.bind(this));
    this.formValue='';
  }


}
