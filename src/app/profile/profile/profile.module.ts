import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '../../menu/menu.module';
import {AddpublicacionModule} from '../../addpublicacion/addpublicacion.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    MenuModule,
    AddpublicacionModule
  ]
})
export class ProfileModule { }
