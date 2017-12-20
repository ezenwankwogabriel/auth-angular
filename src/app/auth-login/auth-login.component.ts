import { Component, OnInit } from '@angular/core';
import { User } from '../users';
import { DataService } from '../data.service'

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css'],
  providers: [DataService]
  
})

export class AuthLoginComponent implements OnInit {
  userList: User[]=[];

  constructor(private dataService: DataService) { }

checkUser(form){
  let newUser: User ={
    name: form.value.username,
    password: form.value.password
  }
  this.dataService.checkUser(newUser)
  .subscribe(user=>{
    console.log(user);
  })
}

  ngOnInit() {
  }

}
