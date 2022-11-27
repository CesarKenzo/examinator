import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule, ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TakeExamComponent } from './components/take-exam/take-exam.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { CreateExamComponent } from './components/create-exam/create-exam.component';
import { ListQuestionComponent } from './components/list-question/list-question.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { ListUserComponent } from './components/list-user/list-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { LiveListComponent } from './components/live-list/live-list.component';
import { ExamsPageComponent } from './components/exams-page/exams-page.component';
import { TaskPageComponent } from './components/task-page/task-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    TakeExamComponent,
    CreateQuestionComponent,
    CreateExamComponent,
    ListQuestionComponent,
    AdminPageComponent,
    ListUserComponent,
    CreateUserComponent,
    CreateTaskComponent,
    LiveListComponent,
    ExamsPageComponent,
    TaskPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule, 
    MatSliderModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
