import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private _url = "http://localhost:8181/registration";

  constructor(private _http: HttpClient) { }

  saveUser(user: User) {
    return this._http.post<any>(this._url, user);
  }
}
