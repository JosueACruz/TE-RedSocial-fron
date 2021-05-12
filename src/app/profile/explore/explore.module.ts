import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { MenuModule } from '../../menu/menu.module';

@NgModule({
  declarations: [ExploreComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    MenuModule
  ]
})
export class ExploreModule { }
