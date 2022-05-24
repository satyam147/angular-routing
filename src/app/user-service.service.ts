import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'any'
})
export class UserServiceService {
  students: {
    name: string,
    branch: string,
    id: string,
  }[] = [];

  constructor() { }

  addStudent(person: {
    name: string,
    branch: string,
    id: string,
  }){
    this.students.push(person);
  }
}
