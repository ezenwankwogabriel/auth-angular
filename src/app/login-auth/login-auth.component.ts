import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css'],
  providers: [LoginService]
})
export class LoginAuthComponent implements OnInit {
  userList: User[]=[];
  toggleSigning: boolean= false;
  viewUsers: boolean = false;

  constructor(private loginservice: LoginService) { }

  toggling(){
    this.toggleSigning = !this.toggleSigning
  }

 
  getUsers(){
    this.loginservice.getUser()
    .subscribe( user => {
      this.userList = user;
    })
  }

  users(){
    this.getUsers();
    this.viewUsers = !this.viewUsers
    
  }


  
  onSignUp(credentials){
    let newUser: User ={
      name: credentials.name,
      password: credentials.password,
      admin: true
    }
    console.log(newUser)
    this.loginservice.onSignup(newUser)
    .subscribe(user =>{
      console.log(user)
    })
  }

  onLogin(credentials){
    let newUser: User ={
      name: credentials.name,
      password: credentials.password,
      admin: true
    }
    console.log(newUser)
    this.loginservice.onLogin(newUser)
    .subscribe(user =>{
      console.log(user)
    })
  }







  ngOnInit() {

  }

}
