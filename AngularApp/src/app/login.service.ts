import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url = "http://localhost:8181/signin";

  constructor(private _http: HttpClient) { }

  findUser(user: User) {
    return this._http.post<any>(this._url, user);
  }
}
