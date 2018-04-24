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

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
      AppComponent,
      AuthenticationComponent,
      LogoutComponent,
      SignupComponent,
      SigninComponent,
      RootMainComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ProfileModule,
      routing,
      ReactiveFormsModule,
      HttpModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
