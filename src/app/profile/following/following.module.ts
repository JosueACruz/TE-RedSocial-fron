import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowingRoutingModule } from './following-routing.module';
import { FollowingComponent } from './following.component';
import { MenuModule } from '../../menu/menu.module';


@NgModule({
  declarations: [FollowingComponent],
  imports: [
    CommonModule,
    FollowingRoutingModule,
    MenuModule
  ]
})
export class FollowingModule { }
