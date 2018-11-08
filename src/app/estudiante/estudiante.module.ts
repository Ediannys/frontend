import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteComponent } from './estudiante/estudiante.component';
import { Routes, RouterModule } from '@angular/router';
import { AppShareModule } from '../app-share/app-share.module';

import { CursosComponent } from './estudiante/cursos/cursos.component';
import { InscripcionComponent } from './estudiante/inscripcion/inscripcion.component';
import { ExamenComponent } from './estudiante/examen/examen.component';
import { InformacionComponent } from './estudiante/informacion/informacion.component';

const routes: Routes = [
  {
    path: '',
    component: EstudianteComponent,
    children: [
    {
        path: 'estudiante', redirectTo: '/informacion', pathMatch: 'full'
      },
      {
        path: 'informacion', component: InformacionComponent
      },
      {
        path: 'ver_cursos', component: CursosComponent,
      },
      {
        path: 'ver_cursos/examen/:id', component: ExamenComponent
      },
      {
        path: 'inscripcion', component: InscripcionComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    EstudianteComponent,
    CursosComponent,
    InscripcionComponent,
    ExamenComponent,
    InformacionComponent
  ]
})
export class EstudianteModule { }
