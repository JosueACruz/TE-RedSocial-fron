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
  click=0;
  cantiSeguidores = null;
  cantiSeguidos = null;
 

  constructor(private restService:RestService, private router: Router) { }

  ngOnInit(): void {
    this.restService.otroPerfil().subscribe(res =>this.otro = res);
    this.restService.publicacionesProfileOtro().subscribe(res => this.otroPub = res );
    //sessionStorage.removeItem('username');
    this.cantSeguidores();
    this.cantSeguidos();
  }

  seguir(){
    let token=sessionStorage.getItem('token');
    let username = document.getElementById("username")
    const formData = new FormData();
    formData.append("token", token);
    formData.append("usernameSeg",username.textContent);
    this.restService.seguidores(formData).subscribe(res=>{
      console.log('Res:',res)
      this.changeValue();
    });
  }

  changeValue(){
    var btnFollow = document.getElementById('on');
    if (btnFollow.innerHTML == 'Stop Follow'){
      btnFollow.innerHTML = 'Follow';
    }
    else {
      btnFollow.innerHTML = 'Stop Follow';
    }
    
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
