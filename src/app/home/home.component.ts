import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    // this.userService.get('https://google.com');
    // this.userService.post('http://192.168.1.18:9876/nodeapp/postdata')
  }

}
