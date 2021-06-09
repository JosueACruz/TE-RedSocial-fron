import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpublicacionRoutingModule } from './addpublicacion-routing.module';
import { AddpublicacionComponent } from './addpublicacion.component';


@NgModule({
  declarations: [AddpublicacionComponent],
  imports: [
    CommonModule,
    AddpublicacionRoutingModule
  ],exports: [ AddpublicacionComponent ]
})
export class AddpublicacionModule { }
