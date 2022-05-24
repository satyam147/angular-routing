import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  form: FormGroup;
  image: File;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'first_name': new FormControl(null),
      'last_name': new FormControl(null),
      'email': new FormControl(null),
      'mobile': new FormControl(null),
      'gender': new FormControl(null),
      'hobbies': new FormControl(null),
    })
  }

  createTask() {
    let data = new FormData();
    data.append('first_name', this.form.value['first_name']);
    data.append('last_name', this.form.value['last_name']);
    data.append('email', this.form.value['email']);
    data.append('mobile', this.form.value['mobile']);
    data.append('gender', this.form.value['gender']);
    /* for (let imageKey in this.image) {
       data.append('images',this.image[imageKey]);
     }*/
    data.append('image', this.image);
    this.http.post('http://localhost:3000/users/create', data
    )
      .subscribe((res) => {
        console.log(res);
      })
  }

  fileChanged(file: any) {
    const target = file.target as HTMLInputElement;
    const files = target.files as FileList;
    this.image = files[0];
  }
}
