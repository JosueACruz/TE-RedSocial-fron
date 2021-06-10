import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { MenuModule } from '../../menu/menu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import {AddpublicacionModule} from '../../addpublicacion/addpublicacion.module';


@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditProfileRoutingModule,
    ReactiveFormsModule,
    // ErrorTailorModule.forRoot({
    //   errors: {
    //     useValue: {
    //       required: 'Campo requerido',
    //       minlength: ({ requiredLength, actualLength }) =>
    //         `Expect ${requiredLength} but got ${actualLength}`,
    //       invalidAddress: error => `Address isn't valid`
    //     }
    //   }
    // }),
    MenuModule,
    AddpublicacionModule
  ]
})
export class EditProfileModule { }
