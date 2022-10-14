import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExamComponent } from './components/create-exam/create-exam.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { HomeComponent } from './components/home/home.component';
import { ListQuestionComponent } from './components/list-question/list-question.component';
import { TakeExamComponent } from './components/take-exam/take-exam.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
