import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  constructor(private restService:RestService, private router: Router) { }

  followers= null

  ngOnInit(): void {
    this.verSeguidores();
  }

  verSeguidores(){
    let peticion='seguidores';
    let user = sessionStorage.getItem('username');
    const formData = new FormData();
    formData.append("peticion", peticion);
    formData.append("username",user);
    this.restService.verSeguidores(formData).subscribe(res=>{
      this.followers= res;
      console.log('Res:', this.followers)
    });
  }

  obtener(usern){
    console.log(document.getElementById("username").textContent);
    sessionStorage.setItem("username",usern.textContent)
    this.router.navigate(['/profileuser']);
  }
}
