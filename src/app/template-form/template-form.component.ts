import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  _name: string = '';
  @ViewChild('userform') form: NgForm;
  userCreated: boolean = false;
  _email: string;
  _gender: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  createUser() {
    // console.log(this.form.value);
    this.userCreated = true;
    this._name = this.form.value.user_info.name;
    this._gender = this.form.value.gender;
    this._email = this.form.value.user_info.email;
    this.resetForm();
  }

  patchForm() {
    this.form.form.patchValue({
      user_info: {
        name: 'user name',
        email: 'user@user.com',
      },
    });
  }

  setForm() {
    this.form.form.setValue({
      user_info: {
        name: 'user name',
        email: 'user@user.com',
      },
      gender: 'male'
    });
  }

  resetForm() {
    this.form.form.reset();
  }
}
