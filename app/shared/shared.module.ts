import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NavbarComponent } from '../navbar/navbar.component';
import { SearchComponent, SearchItem } from '../search';
import {
  AuthenticationComponent,
  LogoutComponent,
  SigninComponent,
  SignupComponent } from '../auth/splash';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavbarComponent,
    SearchComponent,
    SearchItem,
    AuthenticationComponent,
    LogoutComponent,
    SigninComponent,
    SignupComponent
  ],
  exports: [
    NavbarComponent,
    SearchComponent,
    SearchItem,
    AuthenticationComponent,
    LogoutComponent,
    SigninComponent,
    SignupComponent
  ]
})

export class SharedModule {}
