import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CreateExamComponent } from './components/create-exam/create-exam.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { HomeComponent } from './components/home/home.component';
import { ListQuestionComponent } from './components/list-question/list-question.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { LiveListComponent } from './components/live-list/live-list.component';
import { TakeExamComponent } from './components/take-exam/take-exam.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'live-list',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'live-list', 
    component: LiveListComponent 
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
    path: 'adminPage',
    component: AdminPageComponent
  },
  {
    path: 'listUser',
    component: ListUserComponent
  },
  {
    path: 'createUser',
    component: CreateUserComponent
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
    path: 'createExam',
    component: CreateExamComponent
  },
  {
    path: 'createTask',
    component: CreateTaskComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
