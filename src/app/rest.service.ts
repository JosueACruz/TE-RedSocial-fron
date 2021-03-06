import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor( private http: HttpClient ) { }

  public get(url:string){
    return this.http.get(url);
  }
  public tokenUser(data){
    return this.http.post('http://127.0.0.1:8000/api/login',data);//genera token inserta en BD
  }

  public InsertUser(data){
    return this.http.post('http://127.0.0.1:8000/api/usuarios',data);//Inserta usuarios
  }
  public logOut(data){
    let accessToken = sessionStorage.getItem('token');
    let url = this.http.put('http://127.0.0.1:8000/api/login/'+accessToken,data);//cierra sesion
    return url;
    
  }
  public editProfile(data){
    let accessToken = sessionStorage.getItem('token');
    let url = this.http.post('http://127.0.0.1:8000/api/usuarios/'+accessToken,data);//actualiza perfil
    return url;
  }

  public getPublicaciones(){
    let url = this.http.get('http://127.0.0.1:8000/api/Publication/');
    return url;
  }

  public userProfile(){
    let accessToken = sessionStorage.getItem('token');
    return this.http.get('http://127.0.0.1:8000/api/token/'+accessToken)//obitene user profile
  }

  public publicacionesProfile(){
    let accessToken = sessionStorage.getItem('token');
    return this.http.get('http://127.0.0.1:8000/api/Publication/'+accessToken)//obitene user publicaciones login
  }

  public insertPublicacion(data){
    return this.http.post('http://127.0.0.1:8000/api/Publication',data);//Inserta publicaion
  }

  public otroPerfil(){
    let otroUser = sessionStorage.getItem('username');
    return this.http.get('http://127.0.0.1:8000/api/usuarios/'+otroUser);//Inserta publicaion
  }

  public publicacionesProfileOtro(){
    let otroUser = sessionStorage.getItem('username');
    return this.http.get('http://localhost:8000/api/otrapublication/'+otroUser)//obitene user publicaciones login
  }
  public getUser(){
    let user = sessionStorage.getItem('token');
    console.log('el user es:'+user)
    if (user!==null || typeof user!=='undefined') {
      
      return user;
    } else {
      return null;
    }
  }
  public likes(data){
    return this.http.post('http://localhost:8000/api/likes/',data);
  }
  public seguidores(data){
    return this.http.post('http://localhost:8000/api/seguidores/',data);
  }
  public verSeguidores(data){
    return this.http.post('http://localhost:8000/api/seguidos',data);
  }
}
