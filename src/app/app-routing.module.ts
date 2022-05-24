import {Host, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {StudentDetailsComponent} from './Student/student-details/student-details.component';
import {StudentsComponent} from './Student/students/students.component';
import {TemplateFormComponent} from "./template-form/template-form.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {TaskComponent} from "./task/task.component";
import {AddStudentComponent} from "./Student/add-student/add-student.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'student', component: StudentsComponent},
  {path: 'student/add', component: AddStudentComponent},
  {path: 'student/:id', component: StudentDetailsComponent},
  {path: 'form/template', component: TemplateFormComponent},
  {path: 'form/reactive', component: ReactiveFormComponent},
  {path: 'task', component: TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
