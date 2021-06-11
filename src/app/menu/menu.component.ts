import { toTypeScript } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { User } from '../user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user = new User();
  public logged = false;
  constructor(private restService:RestService, private router: Router) { }

  ngOnInit(): void {
    this.checkUser();
  }
  

  Cerrar(){
    this.restService.logOut(this.user).subscribe(res => {
      this.router.navigate(['/login']);
      sessionStorage.removeItem("token");
      sessionStorage.removeItem('username');
      console.log(res);
    });
  }

  checkUser(){
    if (this.restService.getUser() === null) {
      this.logged = false;
      console.log('el user esta: '+this.logged)
    }else{
      this.logged = true;
      console.log('el user esta: '+this.logged)
    }
  }
}
