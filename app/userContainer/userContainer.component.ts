import { Component, OnInit } from '@angular/core';


@Component({
  selector: "app-user-container",
  templateUrl: "./userContainer.component.html",
  styleUrls: ['./userContainer.component.css']
})

export class UserComponent implements OnInit {

  username: string;
  firstName: string;
  lastName: string;
  imageUrl: string;

  ngOnInit() {
    var currentUser = localStorage.getItem("currentUser");
    var user = JSON.parse(currentUser);
    if(user) {
      this.imageUrl = "http://profilepics.xyz/wp-content/uploads/2017/07/Cute-Profile-pics-1.gif";
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.username = user.username;

    }
  }



}
