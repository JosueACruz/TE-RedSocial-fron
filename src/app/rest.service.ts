import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor( private http: HttpClient ) { }

  public get(url:string){
    return this.http.get(url);
  }
  public tokenUser(data){
    return this.http.post('http://127.0.0.1:8000/api/usuarios',data);
  }

  public InsertUser(data){
    return this.http.post('http://127.0.0.1:8000/api/usuarios',data);
  }
}
