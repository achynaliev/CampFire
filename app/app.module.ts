import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationComponent } from "./auth/authentication.component";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { ProfileModule } from './profile/profile.module';
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";
import { RootMainComponent } from "./rootmain/rootmain.component";
import { RoomListComponent } from './rootmain/rooms/room-list.component';
import { RoomComponent } from './rootmain/rooms/room.component';
import { RoomService } from './rootmain/rooms/room.service';

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
      AppComponent,
      AuthenticationComponent,
      LogoutComponent,
      SignupComponent,
      SigninComponent,
      RootMainComponent,
      RoomListComponent,
      RoomComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ProfileModule,
      routing,
      ReactiveFormsModule,
      HttpModule
    ],
    providers: [AuthService, RoomService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
