import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationComponent } from "./auth/header/authentication.component";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/header/logout.component";
import { ProfileModule } from './profile/profile.module';
import { SignupComponent } from "./auth/header/signup.component";
import { SigninComponent } from "./auth/header/signin.component";
import { AuthService } from "./auth/header/auth.service";
import { RootMainComponent } from "./rootmain/rootmain.component";
import { RoomListComponent } from './rootmain/rooms/room-list.component';
import { RoomComponent } from './rootmain/rooms/room.component';
import { RoomService } from './rootmain/rooms/room.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { SearchService } from "./search/search.service";
import { SearchItem } from './search/search-item.component';

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
      SearchItem
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ProfileModule,
      routing,
      ReactiveFormsModule,
      HttpModule
    ],
    providers: [AuthService, RoomService, SearchService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
