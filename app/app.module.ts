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

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
      AppComponent,
      AuthenticationComponent,
      LogoutComponent,
      SignupComponent,
      SigninComponent
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
