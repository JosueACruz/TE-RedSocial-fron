import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userP = null;
  publicaciones = null;

  constructor(private restService:RestService, private router: Router) { }

  cantiSeguidores = null;
  cantiSeguidos = null;

  ngOnInit(): void {
    this.restService.userProfile().subscribe(res =>{
      this.userP = res
      sessionStorage.setItem("username",this.userP[0].username);
      console.log(this.userP[0].username)
    }) ;
   
    
    this.restService.publicacionesProfile().subscribe(res => this.publicaciones =res);

    this.cantSeguidores();
    this.cantSeguidos();
  }
  cantSeguidores(){
    let peticion='cantSeguidores';
    let user = sessionStorage.getItem('username');
    const formData = new FormData();
    formData.append("peticion", peticion);
    formData.append("username",user);
    this.restService.verSeguidores(formData).subscribe(res=>{
      this.cantiSeguidores= res;
      console.log('Res:',this.cantiSeguidores)
    });
  }
  cantSeguidos(){
    let peticion='cantSeguidos';
    let user = sessionStorage.getItem('username');
    const formData = new FormData();
    formData.append("peticion", peticion);
    formData.append("username",user);
    this.restService.verSeguidores(formData).subscribe(res=>{
      this.cantiSeguidos= res;
      console.log('Res2:',this.cantiSeguidos)
    });
  }



}
