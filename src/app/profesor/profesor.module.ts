import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorComponent } from './profesor/profesor.component';
import { Routes, RouterModule } from '@angular/router';
import { AppShareModule } from '../app-share/app-share.module';
import { CalificarComponent } from './profesor/calificar/calificar.component';
import { AsistenciaComponent } from './profesor/asistencia/asistencia.component';

const routes: Routes = [
  {
    path: '',
    component: ProfesorComponent,
    children: [
      {
        path: 'asistencia', component: AsistenciaComponent,
      },
      {
        path: 'calificar', component: CalificarComponent,
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
  declarations: [ProfesorComponent, CalificarComponent, AsistenciaComponent]
})
export class ProfesorModule { }
