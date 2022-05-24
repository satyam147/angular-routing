import { Component } from '@angular/core';
import {AddStudentService} from "./Student/add-student/add-student.service";
import {UserServiceService} from "./user-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [UserServiceService]
})
export class AppComponent {
  title = 'routing';
}
