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
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private nombrePattern: any = /^[A-Za-z]+$/;

  constructor(private restService:RestService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.pattern(this.emailPattern)]],
      password:['',[Validators.required, Validators.minLength(8)]],
      username:['',Validators.required],
      nombre:['',[Validators.required, Validators.pattern(this.nombrePattern)]]
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

  get nombre(){ return this.form.get('nombre');}
  get username(){ return this.form.get('username');}
  get password(){ return this.form.get('password');}
  get email(){ return this.form.get('email');}
}
