import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { MY_ROUTES } from './app.routing';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './home/work/work.component';
import { AssignedworkComponent } from './home/work/assignedwork/assignedwork.component';
import { WorkrecordComponent } from './home/work/workrecord/workrecord.component';
import { AddWorkrecordDialogComponent } from './home/work/workrecord/add-workrecord-dialog/add-workrecord-dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { AddAssignedworkDialogComponent } from './home/work/assignedwork/add-assignedwork-dialog/add-assignedwork-dialog.component';
import { UsersComponent } from './home/users/users.component';
import { AddUserDialogComponent } from './home/users/add-user-dialog/add-user-dialog.component';
import { TasksComponent } from './home/tasks/tasks.component';
import { AddTaskDialogComponent } from './home/tasks/add-task-dialog/add-task-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WorkComponent,
    AssignedworkComponent,
    WorkrecordComponent,
    AddWorkrecordDialogComponent,
    AddAssignedworkDialogComponent,
    UsersComponent,
    AddUserDialogComponent,
    TasksComponent,
    AddTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MY_ROUTES,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatCheckboxModule,
  ],
  entryComponents: [
    AddWorkrecordDialogComponent,
    AddAssignedworkDialogComponent,
    AddUserDialogComponent,
    AddTaskDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
