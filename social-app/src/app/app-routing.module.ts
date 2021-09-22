import { LogInComponent } from './log-in/log-in.component';
import { AppResolver } from './app.resolver';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionsComponent } from './questions/questions.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { AdminManagerComponent } from './admin-manager/admin-manager.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '',
    component: MainPageComponent,
    resolve: {
      data: AppResolver,
    }
  },
  { path: 'admin', component: AdminManagerComponent},
  { path: 'me', component: UserManagerComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LogInComponent},
  { path: 'detail/:id', component: QuestionDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
