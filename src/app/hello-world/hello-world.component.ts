import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { login } from '../models/login';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent{


  constructor(private userService:LoginService){}


  testVariable : string="Hello World";
 // data:login | undefined;
 getUserData()
  {
    
    this.userService.getUserData().subscribe({
      next: (data) => {
        debugger;
        var x = data; 

      }
      // ,
      // error: (e) => {
      //   console.error(e);
      //   this.showAlert=true;
      //   this.flightDataCount=0;
      // },
      // complete: () => {
      //   console.info(DisplayMessage.HTTPSuccess);
      // }
    });
  }

}
