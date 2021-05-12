import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { MenuModule } from '../../menu/menu.module';


@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    MenuModule
  ]
})
export class EditProfileModule { }
