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
  
  constructor(private restService:RestService, private router: Router) { }

  ngOnInit(): void {
    
  }
  

  Cerrar(){
    this.restService.logOut(this.user).subscribe(res => {
      this.router.navigate(['/login']);
      sessionStorage.removeItem("token");
      console.log(res);
    });
  }

}
