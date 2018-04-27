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
    console.log(user);
    if(user) {
      this.imageUrl = "http://chittagongit.com//images/generic-user-icon/generic-user-icon-19.jpg";
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.username = user.username;

    }
  }



}
