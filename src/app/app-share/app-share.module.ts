import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app-material/app-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthGuardService } from './guards/auth-guard.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ ],
  exports: [
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuardService, JwtHelperService]
})
export class AppShareModule { }
