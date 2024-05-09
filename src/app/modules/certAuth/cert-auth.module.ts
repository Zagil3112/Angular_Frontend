import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertAuthComponent } from './component/cert-auth/cert-auth.component';
import { NewCertAuthComponent } from './component/new-cert-auth/new-cert-auth.component';



@NgModule({
  declarations: [
    CertAuthComponent,
    NewCertAuthComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class CertAuthModule { }
