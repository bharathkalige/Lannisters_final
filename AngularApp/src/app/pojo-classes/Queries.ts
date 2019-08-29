import { Question } from '../pojo-classes/Question';
import { Answer } from './Answer';

export class Queries{
    constructor(public title:string,public user_id:string,public description:string,public question_id:string, public answers:Answer[]){}
}