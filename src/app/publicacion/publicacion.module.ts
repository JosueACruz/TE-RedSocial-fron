import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionRoutingModule } from './publicacion-routing.module';
import { PublicacionComponent } from './publicacion.component';
import { MenuModule } from '../menu/menu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [PublicacionComponent],
  imports: [
    CommonModule,
    FormsModule,
    PublicacionRoutingModule,
    MenuModule,
    ReactiveFormsModule
  ]
})
export class PublicacionModule { }
