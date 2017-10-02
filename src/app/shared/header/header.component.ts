import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { User } from '../models/userModel';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(
    private userService: UserService

  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }
}
