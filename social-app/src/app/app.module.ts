import { UserService } from './shared/services/user.service';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './shared/services/data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { AppResolver } from './app.resolver';
import { UserListComponent } from './admin-manager/user-list/user-list.component';
import { QuestionListComponent } from './admin-manager/question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    TopRankComponent,
    UserManagerComponent,
    AdminManagerComponent,
    MainPageComponent,
    QuestionDetailComponent,
    LogInComponent,
    RegisterComponent,
    UserListComponent,
    QuestionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, DataService, AppResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
