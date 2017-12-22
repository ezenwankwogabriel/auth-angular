import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginAuthComponent } from './login-auth/login-auth.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginAuthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
