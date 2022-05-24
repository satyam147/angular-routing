import {Component, OnInit} from '@angular/core';
import {AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userform: FormGroup;
  restrictedNames: string[] = [
    'admin', 'root'
  ];
  restrictedEmails: string[] = [
    'admin@admin.com',
    'test@test.com'
  ];

  constructor(private srv: UserServiceService) {
  }

  ngOnInit(): void {
    this.userform = new FormGroup({
      'user_info': new FormGroup({
        'name': new FormControl(null, [Validators.required, this.isNameRestricted.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], [(this.isEmailRestricted.bind(this) as AsyncValidatorFn)]),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([]),
    });
  }

  createUser() {
    console.log(this.userform);
  }

  checkEmail() {
    // if (this.userform.controls['email'].valid) {
    //   console.log(this.userform.value['email']);
    // }
  }

  onAddHobby() {
    let control = new FormControl(null, Validators.required);
    (this.userform.get('hobbies') as FormArray)!.push(control);
  }

  get hobbyControls() {
    return (this.userform.get('hobbies') as FormArray)!.controls;
  }

  isNameRestricted(control: FormControl) {
    if (this.restrictedNames.includes(control.value)) {
      return {restrictedName: true};
    }
    return null;
  }

  isEmailRestricted(control: FormControl): Promise<any> {
    let promis = new Promise<any>((resolve) => {
      setTimeout(() => {
        if (this.restrictedEmails.includes(control.value)) {
          resolve({emailRestricted: true});
        }
        resolve(null);
      }, 2000);
    });
    return promis;
  }

}
