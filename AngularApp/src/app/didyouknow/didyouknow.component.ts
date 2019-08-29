import { Component, OnInit } from '@angular/core';


import { DidyouknowService } from '../services/didyouknow/didyouknow.service';
import { Announcement } from '../pojo-classes/Announcement';
import { Didyouknow } from '../pojo-classes/Didyouknow';
@Component({
  selector: 'app-didyouknow',
  templateUrl: './didyouknow.component.html',
  styleUrls: ['./didyouknow.component.css']
})
export class DidyouknowComponent implements OnInit {

  public updateList:Didyouknow[];
 constructor(private _updateService:DidyouknowService) { }

  ngOnInit() {
    this._updateService.getUpdateList().subscribe(data=>this.updateList=data);
  }

}
