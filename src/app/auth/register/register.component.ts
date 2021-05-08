import { User } from './../../user';
import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','../login/login.component.scss']
})
export class RegisterComponent implements OnInit {

  user = new User();
  
  constructor(private restService:RestService) { }

  ngOnInit(): void {
  }

  insertUser(){
    this.restService.InsertUser(this.user).subscribe(res => {
      console.log(res);
      let toki = res.toString();
      sessionStorage.setItem('token', toki);
    })
  }
}
