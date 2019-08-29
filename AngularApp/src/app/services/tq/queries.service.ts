import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Queries } from 'src/app/pojo-classes/Queries';
import { QuestionRequest } from 'src/app/request-pojo-classes/QuestionRequest';
import { PostResponse } from 'src/app/request-pojo-classes/PostResponse';
import { AnswerRequest } from 'src/app/request-pojo-classes/AnswerRequest';
import { LikeAnswerRequest } from 'src/app/request-pojo-classes/LikeAnswerRequest';
@Injectable({
 providedIn: 'root'
})
export class QueriesService {

 private _url="http://localhost:8080/techq/allquestions"
 private _urlSendQuestion="http://localhost:8080/techq/addquestion";
 private _urlSendAnswer="http://localhost:8080/techq/addanswer";
 private _urlLikeAnswer="http://localhost:8080/techq/likeanswer";
 private _urlDisLikeAnswer="http://localhost:8080/techq/dislikeanswer";

 constructor(private _http:HttpClient) { }

 getQuestionList():Observable <Queries[]>{
   return this._http.get<Queries[]>(this._url);
 }

 addQuestion(question:QuestionRequest):Observable<PostResponse>{
  return this._http.post<PostResponse>(this._urlSendQuestion,question);
}

addAnswerToQuestion(answer:AnswerRequest):Observable<PostResponse>{
  return this._http.post<PostResponse>(this._urlSendAnswer,answer);
}

likeAnswer(answerId:LikeAnswerRequest):Observable<PostResponse>{
  return this._http.post<PostResponse>(this._urlLikeAnswer,answerId);
}

dislikeAnswer(answerId:LikeAnswerRequest):Observable<PostResponse>{
  return this._http.post<PostResponse>(this._urlDisLikeAnswer,answerId);
}


}