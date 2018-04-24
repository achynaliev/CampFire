import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MessageListComponent } from './rooms/room-list.component';

@Component({
  selector: 'cf-rootmain',
  template: `
  <div class="main-page-parent-div">
    <section class="user-stats-rooms-list">
      <div class="user-stats">
      </div>
      <div class="rooms-list">
      <app-message-list></app-message-list>
      </div>
    </section>
    <section class="main-page-body">
      <div>
      </div>
    </section>
  </div>
  `
})

export class RootMainComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/welcome', 'signin']);
    }
  }
}
