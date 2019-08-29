import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../services/announcements/announcements.service';
import { Announcement } from '../pojo-classes/Announcement';

@Component({
 selector: 'app-announcements',
 templateUrl: './announcements.component.html',
 styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
 public updateList:Announcement[];
 constructor(private _announcementsService:AnnouncementsService) { }
 ngOnInit() {
   this._announcementsService.getUpdateList().subscribe(data=>this.updateList=data);
 }
}