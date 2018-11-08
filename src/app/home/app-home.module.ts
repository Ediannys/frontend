import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppShareModule } from '../app-share/app-share.module';

import { HomeComponent } from './home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { HomeService } from './home.service';

const routerConfig: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    AppShareModule,
    RouterModule.forChild(routerConfig)
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    SignInComponent,
    SignUpComponent
  ],
  providers: [HomeService],
  entryComponents: [
    SignInComponent,
    SignUpComponent
  ]
})
export class AppHomeModule { }
