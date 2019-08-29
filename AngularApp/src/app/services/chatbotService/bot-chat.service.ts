import { Injectable } from '@angular/core';
import { MessageData } from '../../pojo-classes/MessageData';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { ResponseData } from '../../pojo-classes/ResponseData';
import { TouchSequence } from 'selenium-webdriver';
import { BotRequest } from 'src/app/request-pojo-classes/BotRequest';
import { BotResponse } from 'src/app/request-pojo-classes/botResponse';
import { LocalStorage1Service } from 'src/app/local-storage1.service';
import { GetChat } from 'src/app/request-pojo-classes/GetChat';

@Injectable({
  providedIn: 'root'
})
export class BotChatService {

  private _urlChat="http://localhost:8080/chatbot/chat";
  private _urlSend="http://localhost:8080/chatbot";

  constructor(private _http: HttpClient,private _sessionService:LocalStorage1Service) { }

  getMesagesList():Observable<MessageData[]>{
    let getChat:GetChat = new GetChat(this._sessionService.getFromSession("user_id"));
    return this._http.post<MessageData[]>(this._urlChat,getChat);
  }

  addNewMesaage(chatMessage:MessageData):Observable<BotResponse>{
    let botRequest:BotRequest = new BotRequest(this._sessionService.getFromSession("user_id"),chatMessage.content);
    return this._http.post<BotResponse>(this._urlSend,botRequest);
  }

}
