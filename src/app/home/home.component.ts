import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  publica = null;

  constructor(private restService:RestService, private router: Router) { }

  ngOnInit(): void {
    this.restService.getPublicaciones().subscribe(res => this.publica = res )
  }

}
