export class Answer{
    constructor(public user_id:string,public answer_id:string,public question_id:string,public description:string, public likes:number,public dislikes:number){}
}