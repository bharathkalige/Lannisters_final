import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/pojo-classes/Announcement';
import { Didyouknow } from 'src/app/pojo-classes/Didyouknow';

@Injectable({
  providedIn: 'root'
})
export class DidyouknowService {
  private _url="http://localhost:8080/didyouknow"



  constructor(private _http:HttpClient) { 

  }
  getUpdateList():Observable <Didyouknow[]>{
    return this._http.get<Didyouknow[]>(this._url);
  }
}
