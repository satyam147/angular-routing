import {UserServiceService} from "../../user-service.service";
import {Injectable} from "@angular/core";
@Injectable()
export class AddStudentService {
  constructor(private studentService: UserServiceService) {
  }

  addStudent(person: {
    name: string,
    branch: string,
    id: string,
  }) {
    if (person.name == '' || person.id == '' || person.branch == '') return;
    this.studentService.students.push(person);
  }
}
