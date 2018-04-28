import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationComponent } from "./auth/splash/authentication.component";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/splash/logout.component";
import { ProfileModule } from './profile/profile.module';
import { SignupComponent } from "./auth/splash/signup.component";
import { SigninComponent } from "./auth/splash/signin.component";
import { AuthService } from "./auth/splash/auth.service";
import { RootMainComponent } from "./rootmain/rootmain.component";
import { RoomListComponent } from './rootmain/rooms/room-list.component';
import { RoomComponent } from './rootmain/rooms/room.component';
import { RoomService } from './rootmain/rooms/room.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { SearchService } from "./search/search.service";
import { SearchItem } from './search/search-item.component';
import { ChatService } from "./chat/chat.service";
import { ChatModule } from "./chat/chat.module";
import { UserComponent } from "./userContainer/userContainer.component";
import { ProjectCreationComponent } from "./projects/project_creation/project_creation.component";

@NgModule({
    declarations: [
      AppComponent,
      AuthenticationComponent,
      LogoutComponent,
      SignupComponent,
      SigninComponent,
      RootMainComponent,
      RoomListComponent,
      RoomComponent,
      NavbarComponent,
      SearchComponent,
      SearchItem,
      UserComponent,
      ProjectCreationComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ProfileModule,
      routing,
      ReactiveFormsModule,
      HttpModule,
      ChatModule,
    ],
    providers: [AuthService, RoomService, SearchService, ChatService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
