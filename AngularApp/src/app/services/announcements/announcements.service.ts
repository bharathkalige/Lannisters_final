import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/pojo-classes/Announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {

  private _url="http://localhost:8080/announcements"
  constructor(private _http:HttpClient) 
  { 

  }
  getUpdateList():Observable <Announcement[]>{
    return this._http.get<Announcement[]>(this._url);
  }
}
