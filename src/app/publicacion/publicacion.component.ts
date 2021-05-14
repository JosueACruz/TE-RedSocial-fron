import { Publicaciones } from './../publicaciones';
import { RestService } from 'src/app/rest.service';
import { EditProfileComponent } from './../profile/edit-profile/edit-profile.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss','../profile/edit-profile/edit-profile.component.scss']
})
export class PublicacionComponent implements OnInit {
  public archivos: any = [];
  public previsualizacion: string;
  public loading: boolean;
  fileName = '';
  file:File;
  elArchivo = '';

  pub = new Publicaciones()

  constructor(
    private sanitizer:DomSanitizer,
    private http: HttpClient,
    private restService:RestService, private router: Router
  ) { }

  ngOnInit(): void {
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


  capturarFile(event):any{
    this.file = event.target.files[0]
    this.extraerBase64(this.file).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      this.elArchivo= event.target.files[0].name;
    })
  }

  limpiarData(){
    this.previsualizacion = '';
    this.pub.title = '';
    this.pub.description = '';
    this.elArchivo = '';
  }

  public enviarData(){
    try {
      if(this.file){
        console.log('ar--',this.archivos)
        this.fileName = this.archivos.name;
        const formData = new FormData();
        let accessToken = sessionStorage.getItem('token');
        formData.append("token",accessToken);
        formData.append("title",this.pub.title);
        formData.append("description",this.pub.description);
        formData.append("Image", this.file);
        console.log(formData)
        this.restService.insertPublicacion(formData).subscribe(res =>{ 
          console.log(res);
          this.limpiarData();
        });
      }
    } catch (e) {
      console.log('ERROR', e);
    }
  
  }
}
