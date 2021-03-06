import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileuserRoutingModule } from './profileuser-routing.module';
import { ProfileuserComponent } from './profileuser.component';
import { MenuModule } from '../../menu/menu.module';
import {AddpublicacionModule} from '../../addpublicacion/addpublicacion.module';

@NgModule({
  declarations: [ProfileuserComponent],
  imports: [
    CommonModule,
    ProfileuserRoutingModule,
    MenuModule,
    AddpublicacionModule
  ]
})
export class ProfileuserModule { }
