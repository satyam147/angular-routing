import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StudentsComponent } from './Student/students/students.component';
import { StudentDetailsComponent } from './Student/student-details/student-details.component';
import { AddStudentComponent } from './Student/add-student/add-student.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StudentComponent } from './Student/student/student.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './task/task.component';
import {UserServiceService} from "./user-service.service";
import {AddStudentService} from "./Student/add-student/add-student.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StudentsComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    StudentComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
