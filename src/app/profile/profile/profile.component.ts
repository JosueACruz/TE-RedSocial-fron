import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userP = null;
  publicaciones = null;

  constructor(private restService:RestService, private router: Router) { }

  ngOnInit(): void {
    this.restService.userProfile().subscribe(res => this.userP = res);

    this.restService.publicacionesProfile().subscribe(res => this.publicaciones =res);

  }



}
