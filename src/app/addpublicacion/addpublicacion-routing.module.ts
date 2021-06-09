import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpublicacionComponent } from './addpublicacion.component';

const routes: Routes = [{ path: '', component: AddpublicacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddpublicacionRoutingModule { }
