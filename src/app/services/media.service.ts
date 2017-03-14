import { RouterModule, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';


@Injectable()
export class MediaService {
  private user: any = {};

  private url: string = 'http://media.mw.metropolia.fi/wbma/';
  
  constructor(private http: Http, private router: Router) { }
  setUser = (user) => {
    this.user = user;
    console.log(this.user);
  }

  login = () => {
     return this.http.post(this.url + 'login', this.user).subscribe(
       resp => {
         const dataFromServer = resp.json();
         this.user = dataFromServer.user;
         this.user.token = dataFromServer.token;
         console.log(this.user);
         localStorage.setItem("user", JSON.stringify(this.user));
         this.router.navigate(['front']);

       },
       error => {
         console.log(error)
       }
     );
  }

  register = () => {
    return this.http.post(this.url+'users', this.user).subscribe(
       resp => {
         if (resp.json().message === "User created successfully") {
           console.log(this.user);
           this.login();
         }

       },
       error => {
         console.log(error)
       }
     );
  }

}
