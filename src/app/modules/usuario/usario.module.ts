import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { NewUserComponent } from './component/new-user/new-user.component';



@NgModule({
  declarations: [
    UsuarioComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsarioModule { }
