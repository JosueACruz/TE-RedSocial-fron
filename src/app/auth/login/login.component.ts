import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { User } from 'src/app/user';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  user = new User();
  public logged = false;

  constructor(private restService:RestService, private router: Router ) { }
  
  
  ngOnInit(): void {
    this.checkUser();
  }
  getToken(){
    this.restService.tokenUser(this.user).subscribe(res => {
      if (res.toString() == 'NO existe el usuario') {
        console.log('failed');
        alert('Session Failed');
        //this.router.navigate(['/login']);
        (<HTMLFormElement>document.getElementById("Login")).reset();
      }
      else{
        this.router.navigate(['/home']);
        console.log(res);
        sessionStorage.setItem("token",res.toString());
      }
      
    })

    
  }
  checkUser(){
    if (this.restService.getUser() === null) {
      this.logged = false;
      console.log('el user esta: '+this.logged)
     
      
    }else{
      this.logged = true;
      console.log('el user esta: '+this.logged)
      if ( this.logged = true) {
        this.router.navigate(['/home']);
      }
    }
  }

}
