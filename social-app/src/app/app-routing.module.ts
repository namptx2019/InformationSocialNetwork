import { QuestionsComponent } from './questions/questions.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { AdminManagerComponent } from './admin-manager/admin-manager.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'admin', component: AdminManagerComponent},
  { path: 'me', component: UserManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
