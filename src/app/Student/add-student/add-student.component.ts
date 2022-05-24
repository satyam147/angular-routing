import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AddStudentService} from "./add-student.service";
import {UserServiceService} from "../../user-service.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  providers: [AddStudentService],
})
export class AddStudentComponent implements OnInit {
  public person: {
    name: string,
    branch: string,
    id: string,
  } = {
    name: 'user111',
    branch: '',
    id: '',
  };

  constructor(private addStudent: AddStudentService) {
  }

  ngOnInit(): void {
  }

  createStudent() {
    this.addStudent.addStudent(this.person);
  }
}
