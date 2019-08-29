import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotChatComponent } from './bot-chat/bot-chat.component';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { HomeComponent } from './home/home.component';
import {PageNotFoundComponent} from'./page-not-found/page-not-found.component';
import {FaqComponent} from './faq/faq.component';
import {LoginComponent} from './login/login.component'
import { AppComponent } from './app.component';
import { TqComponent } from './tq/tq.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
   {path:'faq',component:FaqComponent},
   {path:'login',component:LoginComponent},
  {path:'chatbot',component:BotChatComponent},
   {path:'challenges',component:ChallengeListComponent},
  {path:'home',component:HomeComponent},
   {path:'tq',component:TqComponent},
   {path:'**',component:PageNotFoundComponent}

];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
