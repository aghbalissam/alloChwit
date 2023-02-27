import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private url_authentification = "http://localhost:3000/alloChwit/api/user/"

  constructor(
    private http : HttpClient
  ) { }

  loginUser(userData: any)
  {
    return this.http.post(this.url_authentification + 'login', userData, {responseType: 'json'});
  }

  registerUser(userData: any)
  {
    return this.http.post(this.url_authentification + 'register', userData, {responseType: 'text'})
  }


  loggedIn()
  {
    return !!localStorage.getItem('token'); // ?true: false;
  }

  // Error ( Check the responseType )
  // Http failure during parsing for http://localhost:3000/api/login

}
