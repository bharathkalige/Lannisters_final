import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Challenge } from 'src/app/pojo-classes/Challenge';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeListService {
​
  private _url= "http://localhost:8080/challenges/list";
​
  constructor( private _http: HttpClient)
   {
​
    }
​
  getChallengeDetails():Observable<Challenge[]>{
     return this._http.get<Challenge[]>(this._url);
    // return of(CHALLENGELIST);
}
}
​