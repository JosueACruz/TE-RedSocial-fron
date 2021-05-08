import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redsocial-front';
  constructor(private restService:RestService){

  }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.restService.get('http://127.0.0.1:8000/api/usuarios')
    .subscribe(respuesta =>{
      console.log(respuesta); 
    })
  }
}
