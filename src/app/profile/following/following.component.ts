import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  constructor(private restService:RestService, private router: Router) { }

  followed = null;
  
  ngOnInit(): void {
    this.verSeguidos();
  }

  verSeguidos(){
    let peticion='seguidos';
    let user = sessionStorage.getItem('username');
    const formData = new FormData();
    formData.append("peticion", peticion);
    formData.append("username",user);
    this.restService.verSeguidores(formData).subscribe(res=>{
      this.followed= res;
      console.log('Res:', this.followed)
    });
  }

  obtener(usern){
    console.log(document.getElementById("username").textContent);
    sessionStorage.setItem("username",usern.textContent)
    this.router.navigate(['/profileuser']);
  }

}
