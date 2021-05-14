import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { User } from './../../user';
import {HttpClient, HttpHeaders} from '@angular/common/http'

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

  constructor(
    private sanitizer:DomSanitizer,
    private restService:RestService, private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
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
}
