import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatComponent } from "./chat.component";
import { ChatService } from "./chat.service";
import { ChatRoutingModule } from "./chat-routing.module";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import { ChatComponent } from "./"
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
  ],
  providers: [ChatService]
})

export class ChatModule {};
