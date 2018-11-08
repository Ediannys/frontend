import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './app-share/guards/auth-guard.service';

const routes: Routes = [

  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

  {
    path: 'home', loadChildren: './home/app-home.module#AppHomeModule'
  },

  {
    path: 'admin',
    loadChildren: './administrador/administrador.module#AdministradorModule',
    canActivate: [AuthGuardService],
    data: {
      expectedRole: 1
    }
  },

  {
    path: 'profesor/:id',
    loadChildren: './profesor/profesor.module#ProfesorModule',
    canActivate: [AuthGuardService],
    data: {
      expectedRole: 2
    }
  },

  {
    path: 'estudiante/:id',
    loadChildren: './estudiante/estudiante.module#EstudianteModule',
    canActivate: [AuthGuardService],
    data: {
      expectedRole: 3
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
