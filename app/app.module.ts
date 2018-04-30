import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { ProjectShowContainer } from './projects/project_show/project_show';
import { RootMainModule } from './rootmain/rootmain.module';
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from './shared/shared.module';

import { AuthService } from "./auth/splash/auth.service";
import { RoomService } from './rootmain/rooms/room.service';
import { SearchService } from "./search/search.service";
import { ProjectIndexService } from "./projects/project_index/project_index.service"
import { ProjectService } from "./projects/projects.service";

@NgModule({
    declarations: [
      AppComponent,
      ProjectShowContainer
    ],
    imports: [
      BrowserModule,
      FormsModule,
      RootMainModule,
      ProfileModule,
      SharedModule,
      routing,
      ReactiveFormsModule,
      HttpModule,
    ],
    providers: [
      AuthService,
      RoomService,
      SearchService,
      ProjectService,
      ProjectIndexService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
