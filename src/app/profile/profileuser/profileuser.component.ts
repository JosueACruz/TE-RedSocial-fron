import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileuser',
  templateUrl: './profileuser.component.html',
  styleUrls: ['./profileuser.component.scss','../profile/profile.component.scss']
})
export class ProfileuserComponent implements OnInit {

  otro=null;
  otroPub=null;

  constructor(private restService:RestService, private router: Router) { }

  ngOnInit(): void {
    this.restService.otroPerfil().subscribe(res =>this.otro = res);
    this.restService.publicacionesProfileOtro().subscribe(res => this.otroPub = res );
    sessionStorage.removeItem('username');
  }

}
