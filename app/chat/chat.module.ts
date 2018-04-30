import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatComponent } from "./chat.component";
import { ChatRoutingModule } from "./chat-routing.module";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ChatComponent
  ]
})

export class ChatModule {};
