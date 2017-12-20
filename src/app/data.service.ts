import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }


  checkUser(user){
    return this.http.get('/api/authenticate')
    .map(res=> res.json())
    }

  // addNewUser(newItem){
  //   let headers = new Headers();
  //   headers.append('content-type', 'application/json');
  //   return this.http.post('/api/setup', newUser,   {headers: headers})
  //     //map the return from the post to be a json file
  //     .map(res => res.json())
  // }
  
  
}
