import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowingRoutingModule } from './following-routing.module';
import { FollowingComponent } from './following.component';
import { MenuModule } from '../../menu/menu.module';
import {AddpublicacionModule} from '../../addpublicacion/addpublicacion.module';

@NgModule({
  declarations: [FollowingComponent],
  imports: [
    CommonModule,
    FollowingRoutingModule,
    MenuModule,
    AddpublicacionModule
  ]
})
export class FollowingModule { }
