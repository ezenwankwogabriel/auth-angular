import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginAuthComponent } from './login-auth/login-auth.component';
import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
  {path: '' , component:LoginAuthComponent},
  {path: 'home', component: HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginAuthComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
