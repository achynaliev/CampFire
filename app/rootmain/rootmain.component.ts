import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'cf-rootmain',
  templateUrl: './rootmain.component.html',
  styleUrls: ['./rootmain.component.css']
})

export class RootMainComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/welcome', 'signin']);
    }
  }
}
