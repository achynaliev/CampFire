import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import * as io from "socket.io-client";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  chats: any;
  joined: boolean = false;
  newUser = { username: "", room: ""};
  msgData = {room: "", username: "", message: ""};
  socket = io('http://localhost:4000');

  constructor(private chatService : ChatService) {}

  ngOnInit() {
    var currentUser = localStorage.getItem("currentUser");
    var user = JSON.parse(currentUser);
    // console.log("-----------------" user);
    if(user !== null) {
      this.getChatByRoom("Node.js");
      this.msgData = { room: "Node.js", username: user.username, message: ''};
      this.joined = true;
      this.scrollToBottom();
    }
    this.socket.on('new-message', function(data) {
      console.log(data);
      if (data.message.room === "Node.js") {
        this.chats.push(data.message);

        this.msgData = { room : "Node.js", username: user.username, message: ""};
        this.scrollToBottom();
      }
    }.bind(this));
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    }
    catch(err) { }
  }

  getChatByRoom(room) {
    this.chatService.getChatByRoom(room).then((res) => {
      this.chat = res;
      // console.log("----------", res);
    }, (err) => {
      console.log(err);
    });
  }

  joinRoom() {
    var date = new Date();
    var currentUser = localStorage.getItem("currentUser");
    var user = JSON.parse(currentUser);
    this.getChatByRoom("Node.js");
    this.msgData = { room: "Node.js", username: user.username, message: '' };
    this.joined = true;
    this.socket.emit('save-message', { room: 'Node.js', username: user.username, message: `${user.username} joined the room`, updated_at: date });
  }

  sendMessage() {
    console.log("-----------", this.msgData);
    this.chatService.saveChat(this.msgData).then((result) => {
      this.socket.emit('save-message', result);
    }, (err) => {
      console.log(err);
    });
  }

  leaveRoom() {
    var date = new Date();
    var currentUser = localStorage.getItem("currentUser");
    var user = JSON.parse(currentUser);
    this.socket.emit('save-message', { room: 'Node.js', username: user.username, message: `${user.username} left the room`, updated_at: date });
    // localStorage.removeItem('user');
    this.joined = false;
  }
}
