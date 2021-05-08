import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  user = new User();
  public image:string;

  constructor(private restService:RestService) { }

  ngOnInit(): void {
  }
  getToken(){
    this.restService.tokenUser(this.user).subscribe(res => {
      console.log(res);
      let tok = res[0];
      sessionStorage.setItem("token",tok);
    })
  }
  save(){
    sessionStorage.setItem("token","tok");
  }

}
