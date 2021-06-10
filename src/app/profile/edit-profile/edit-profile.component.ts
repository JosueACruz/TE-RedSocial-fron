import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { User } from './../../user';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  public archivos: any = [];
  public previsualizacion: string;
  public loading: boolean;

  
  user = new User();
  file:File;
  fileName = '';
  public form: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private nombrePattern: any = /^[A-Za-z]+$/;

  constructor(
    private sanitizer:DomSanitizer,
    private restService:RestService, private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.pattern(this.emailPattern)]],
      password:['',[Validators.required, Validators.minLength(8)]],
      username:['',Validators.required],
      nombre:['',[Validators.required, Validators.pattern(this.nombrePattern)]],
      webSite:['',Validators.required],
      desc:['',Validators.required]
    });
  }

  onFileSelected(event){
    this.file = event.target.files[0];
    if(this.file){
      this.fileName = this.file.name;
      this.extraerBase64(this.file).then((imagen: any) =>{
        this.previsualizacion = imagen.base;
      });
      
      const formData = new FormData();
      formData.append("Image", this.file);
      formData.append('_method', 'PUT');
      let accessToken = sessionStorage.getItem('token');
      //const upload$ = this.http.post("http://localhost:8000/api/UserImage/"+accessToken, formData);
      //upload$.subscribe();
    }
  }

  capturarFile(event):any{
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      const elArchivo= event.target.files[0].name;
      console.log(elArchivo);
      this.restService.editProfile(elArchivo).subscribe(res => {
        console.log(res);
      })

    })
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

  updateUser(){
    const formData = new FormData();
    formData.append("nombre", this.user.nombre);
    formData.append("username", this.user.username);
    formData.append("pass", this.user.pass);
    formData.append("email", this.user.email);
    formData.append("webSite", this.user.webSite);
    formData.append("desc", this.user.desc);
    formData.append("Image", this.file);
    formData.append('_method', 'PUT');
    this.restService.editProfile(formData).subscribe(res=>{
      //console.log(this.user)
      console.log('Res:',res)
      this.router.navigate(['/profile']);
    });
  }

  get email(){ return this.form.get('email');}
  get password(){ return this.form.get('password');}
  get username(){ return this.form.get('username');}
  get nombre(){ return this.form.get('nombre');}
  get webSite(){ return this.form.get('webSite');}
  get desc(){ return this.form.get('desc');}
}
