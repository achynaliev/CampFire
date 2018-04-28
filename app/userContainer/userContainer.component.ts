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
      this.imageUrl = "https://avatars0.githubusercontent.com/u/30304723?s=400&u=1d9e86dba7215d12794225083190b3b71875c18d&v=4";
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.username = user.username;

    }
  }



}
