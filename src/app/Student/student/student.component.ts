import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() name: string = '';
  @Input() branch: string = '';
  @Input() id: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  getColor(){
    switch (this.id){
      case '0':
        return 'red'
      case '1':
        return 'blue'
      default:
        return 'black'
    }

  }

}
