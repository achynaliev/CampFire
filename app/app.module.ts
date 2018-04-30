import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from "./app.routing";
import { ProfileModule } from './profile/profile.module';
import { AuthService } from "./auth/splash/auth.service";
import { RootMainComponent } from "./rootmain/rootmain.component";
import { RoomListComponent } from './rootmain/rooms/room-list.component';
import { RoomComponent } from './rootmain/rooms/room.component';
import { RoomService } from './rootmain/rooms/room.service';
import { AppComponent } from "./app.component";
import { SearchService } from "./search/search.service";
import { ChatService } from "./chat/chat.service";
import { ChatModule } from "./chat/chat.module";
import { UserComponent } from "./userContainer/userContainer.component";
import { ProjectCreationComponent } from "./projects/project_creation/project_creation.component";
import { ProjectService } from "./projects/projects.service";
import { CurrentRoomComponent } from "./rootmain/currentroom/currentRoom.component";
import { ProjectIndexComponent } from "./projects/project_index/project_index.component";
import { ProjectIndexItem } from "./projects/project_index/project_index_item.component";
import { ProjectIndexService } from "./projects/project_index/project_index.service"
import { ProjectShowModule } from "./projects/project-show/project-show.module";
// import { ProjectShowService } from "./projects/project-show/project-show.service";


import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
      AppComponent,
      RootMainComponent,
      RoomListComponent,
      RoomComponent,
      UserComponent,
      ProjectCreationComponent,
      CurrentRoomComponent,
      ProjectIndexItem,
      ProjectIndexComponent
      // ProjectShowComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ProfileModule,
      SharedModule,
      routing,
      ReactiveFormsModule,
      HttpModule,
      ChatModule,
      ProjectShowModule
    ],
    providers: [
      AuthService,
      RoomService,
      SearchService,
      ChatService,
      ProjectService,
      ProjectIndexService
      // ProjectShowService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
