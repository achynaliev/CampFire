import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'current-room',
  templateUrl: './currentRoom.component.html',
  styleUrls: ['./currentRoom.component.css']
})

export class CurrentRoomComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('currentRoom') == null) {
      
    }
  }
}
