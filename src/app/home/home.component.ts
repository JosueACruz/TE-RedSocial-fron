import { Publicaciones } from './../publicaciones';
import { User } from 'src/app/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  publica = null;
  public logged = false;

  publicacion = new Publicaciones();
  username='';

  constructor(private restService:RestService, private router: Router) { }

  ngOnInit(): void {
    this.restService.getPublicaciones().subscribe(res => this.publica = res )
    this.checkUser();
  }

  obtener(usern){
    console.log(document.getElementById("username").textContent);
    sessionStorage.setItem("username",usern.textContent)
    this.router.navigate(['/profileuser']);
  }
  checkUser(){
    if (this.restService.getUser() === null) {
      this.logged = false;
      console.log('el user esta: '+this.logged)
      if ( this.logged = true) {
        this.router.navigate(['/login']);
      }
    }else{
      this.logged = true;
      console.log('el user esta: '+this.logged)
    }
  }
}
