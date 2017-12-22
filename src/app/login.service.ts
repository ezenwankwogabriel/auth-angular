import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http'
import'rxjs/add/operator/map'
 
@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  getUser(){
    return this.http.get("http://localhost:3000/api/users")
    .map(res=> res.json())
  }

  onSignup(newUser){
    console.log(newUser)
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/api/users", newUser, {headers: headers})
    .map(res=>res.json())
  }

  onLogin(newUser){
    console.log(newUser)
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/api/authenticate", newUser, {headers: headers})
    .map(res=>res.json())
  }

}


