import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  public form: FormGroup;
  
  constructor(private restService:RestService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required],
      username:['',Validators.required],
      nombre:['',Validators.required]
    });
  }

  insertUser(){
    this.restService.InsertUser(this.user).subscribe(res => {
      console.log(this.user)
      console.log(res);
      let toki = res.toString();
      sessionStorage.setItem('token', toki);
    })
  }
}
