import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Challenge } from '../pojo-classes/Challenge';
import { ChallengeListService } from '../services/challengeList/challenge-list.service';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {
  public ChallengeList: Challenge[];

  constructor(private _challengeListService: ChallengeListService, private router: Router) { }

  ngOnInit() {
    this._challengeListService.getChallengeDetails().subscribe(data => this.ChallengeList = data);
  }
  fetchDetails(ChallengeSelectedFromList: Challenge) {
    console.log(ChallengeSelectedFromList);
    this.router.navigate(['challenges', ChallengeSelectedFromList.challenge_id]);
  }
}
