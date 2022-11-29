import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CreateExamComponent } from './components/create-exam/create-exam.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditExamComponent } from './components/edit-exam/edit-exam.component';
import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ExamsPageComponent } from './components/exams-page/exams-page.component';
import { HomeComponent } from './components/home/home.component';
import { ListExamComponent } from './components/list-exam/list-exam.component';
import { ListQuestionComponent } from './components/list-question/list-question.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { LiveListComponent } from './components/live-list/live-list.component';
import { TakeExamComponent } from './components/take-exam/take-exam.component';
import { TaskPageComponent } from './components/task-page/task-page.component';

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
    path: 'takeExam/:id', 
    component: TakeExamComponent
  }, 
  {
    path: 'adminPage',
    component: AdminPageComponent
  },
  {
    path: 'createUser',
    component: CreateUserComponent
  },
  {
    path: 'listUser',
    component: ListUserComponent
  },
  {
    path: 'editUser/:id',
    component: EditUserComponent
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
    path: 'editQuestion/:id',
    component: EditQuestionComponent
  },
  {
    path: 'createExam',
    component: CreateExamComponent
  },
  {
    path: 'listExam',
    component: ListExamComponent
  },
  {
    path: 'editExam/:id',
    component: EditExamComponent
  },
  {
    path: 'examsPage',
    component: ExamsPageComponent
  },
  {
    path: 'createTask',
    component: CreateTaskComponent
  },
  {
    path: 'listTask',
    component: ListTaskComponent
  },
  {
    path: 'editTask/:id',
    component: EditTaskComponent
  },
  {
    path: 'tasksPage',
    component: TaskPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
