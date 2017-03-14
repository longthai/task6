import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: string ='';
  private password: string ='';

  constructor(private mediaServices: MediaService) { }

  loginUser = () => {
    const user = {
      username: this.username,
      password: this.password
    };
    this.mediaServices.setUser(user);
    this.mediaServices.login();
  }
  ngOnInit() {
    
  }

}
