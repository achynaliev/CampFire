import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RoomListComponent } from './rooms/room-list.component';

@Component({
  selector: 'cf-rootmain',
  template: `
  <div class="main-page-parent-div">
    <section class="user-stats-rooms-list">
      <div class="user-stats">
      <h1>User Stats</h1>
      </div>
      <div class="rooms-list">
      <app-room-list></app-room-list>
      </div>
    </section>
    <section class="main-page-body">
      <div class="main-nav-bar">
        <h2>I am nav bar</h2>
      </div>
      <div class="chats-main">
        <h2>Chat and other shit will go here</h2>
      </div>
    </section>
  </div>
  `,
  styleUrls: ['./rootmain.component.css']
})

export class RootMainComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/welcome']);
    }
  }
}
