import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserServiceService} from "../../user-service.service";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  name: string = '';
  branch: string = '';
  id: string = '';

  constructor(private route: ActivatedRoute,public studentService: UserServiceService) {
    let person = route.snapshot.queryParams;
    this.id = person['id'];
    let user = this.studentService.students.find((f) => f.id == this.id);
    if(user) {
      this.name = user.name;
      this.branch = user.branch;
    }
  }

  ngOnInit(): void {
  }

}
