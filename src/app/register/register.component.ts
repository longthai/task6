import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private username: string ='';
  private email: string ='';
  private password: string ='';
  

  constructor(private mediaServices: MediaService) { }

  register = () => {
    const user = {
      username : this.username,
      email: this.email,
      password: this.password
    }
    this.mediaServices.setUser(user);
    this.mediaServices.register();
  }

  

  ngOnInit() {
  }

}
