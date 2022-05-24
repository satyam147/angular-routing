import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../../user-service.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  count: number = 10;

  constructor(public studentService: UserServiceService) {
   /* for (let i = 0; i < this.count; i++) {
      this.studentService.students.push({
        name: 'student' + i,
        branch: 'branch' + i,
        id: i.toString()
      });
    }*/
  }

  ngOnInit(): void {
  }


}
