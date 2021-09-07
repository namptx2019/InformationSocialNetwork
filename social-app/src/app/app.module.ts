import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { TopRankComponent } from './top-rank/top-rank.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { AdminManagerComponent } from './admin-manager/admin-manager.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    TopRankComponent,
    UserManagerComponent,
    AdminManagerComponent,
    MainPageComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
