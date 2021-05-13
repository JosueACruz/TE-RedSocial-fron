import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
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
    return this.http.post('http://127.0.0.1:8000/api/login',data);
  }

  public InsertUser(data){
    return this.http.post('http://127.0.0.1:8000/api/usuarios',data);
  }
  public logOut(data){
    let accessToken = sessionStorage.getItem('token');
    let url = this.http.put('http://127.0.0.1:8000/api/login/'+accessToken,data);
    return url;
    
  }
  public editProfile(data){
    let accessToken = sessionStorage.getItem('token');
    let url = this.http.put('http://127.0.0.1:8000/api/usuarios/'+accessToken,data);
    return url;
  }

  public getPublicaciones(){
    let url = this.http.get('http://127.0.0.1:8000/api/Publication/');
    return url;
  }
}
