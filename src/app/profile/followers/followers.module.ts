import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowersRoutingModule } from './followers-routing.module';
import { FollowersComponent } from './followers.component';
import { MenuModule } from '../../menu/menu.module';

@NgModule({
  declarations: [FollowersComponent],
  imports: [
    CommonModule,
    FollowersRoutingModule,
    MenuModule
  ]
})
export class FollowersModule { }
