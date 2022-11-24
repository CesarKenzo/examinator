import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CreateExamComponent } from './components/create-exam/create-exam.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { HomeComponent } from './components/home/home.component';
import { ListQuestionComponent } from './components/list-question/list-question.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TakeExamComponent } from './components/take-exam/take-exam.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'takeExam', 
    component: TakeExamComponent
  }, 
  {
    path: 'createExam',
    component: CreateExamComponent
  },
  {
    path: 'createQuestion',
    component: CreateQuestionComponent
  },
  {
    path: 'listQuestion',
    component: ListQuestionComponent
  },
  {
    path: 'adminPage',
    component: AdminPageComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
