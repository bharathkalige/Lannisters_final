import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'angular-webstorage-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotChatComponent } from './bot-chat/bot-chat.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component'
import { DidyouknowComponent } from './didyouknow/didyouknow.component';
import { TqComponent } from './tq/tq.component';
import { TechTalksComponent } from './tech-talks/tech-talks.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { LoginService } from './login.service';
import { RegisterService } from './register.service';
import { LocalStorage1Service } from './local-storage1.service';
import { MatCardModule } from '@angular/material/card';
import { ChallengeListService } from './services/challengeList/challenge-list.service';
import { DidyouknowService } from './services/didyouknow/didyouknow.service';
import { AnnouncementsService } from './services/announcements/announcements.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    BotChatComponent,
    ChallengeListComponent,
    NavBarComponent,
    SliderComponent,
    HomeComponent,
    PageNotFoundComponent,
    FaqComponent,
    LoginComponent,
    DidyouknowComponent,
    TechTalksComponent,
    TqComponent,
    AnnouncementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    MatCardModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [LoginService, RegisterService, LocalStorage1Service, ChallengeListService, DidyouknowService, AnnouncementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
