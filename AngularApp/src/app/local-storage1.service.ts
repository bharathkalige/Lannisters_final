import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage1Service {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, @Inject(SESSION_STORAGE) private sessionStorage: WebStorageService) { }

  public localData: any = [];
  public sessionData: any = [];

  saveInSession(key, val): void {
    this.sessionStorage.set(key,val);
    this.sessionData[key]=this.sessionStorage.get(key);
  }

  getFromSession(key): string {
    console.log('recieved= key:' + key);
    this.sessionData[key] = this.sessionStorage.get(key);
    //console.log(this.sessionData);
    return this.sessionStorage.get(key);
  }

  isLoggedIn():boolean{
    if(this.sessionStorage.get("user_id")==null){
      return false;
    }
    return true;
  }

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + ' value:' + val);
    this.storage.set(key, val);
    this.localData[key] = this.storage.get(key);
  }

  getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.localData[key] = this.storage.get(key);
    console.log(this.localData);
  }

}
