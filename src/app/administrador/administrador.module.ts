import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorComponent } from './administrador/administrador.component';
import { Routes, RouterModule } from '@angular/router';

import { AppShareModule } from '../app-share/app-share.module';
import { AgregarProfesorComponent } from './administrador/agregar-profesor/agregar-profesor.component';
import { AgregarCursoComponent } from './administrador/agregar-curso/agregar-curso.component';
import { EliminarProfesorComponent } from './administrador/eliminar-profesor/eliminar-profesor.component';
import { EliminarCursoComponent } from './administrador/eliminar-curso/eliminar-curso.component';
import { AsignarCursoComponent } from './administrador/asignar-curso/asignar-curso.component';
import { VerificarTransferenciaComponent } from './administrador/verificar-transferencia/verificar-transferencia.component';
import { EnviarCertificadosComponent } from './administrador/enviar-certificados/enviar-certificados.component';
import { EditarProfesorComponent } from './administrador/editar-profesor/editar-profesor.component';
import { AddPosRespuestaComponent } from './administrador/add-pos-respuesta/add-pos-respuesta.component';
import { AddRespCorrectaComponent } from './administrador/add-resp-correcta/add-resp-correcta.component';
import { AgregarPreguntaComponent } from './administrador/agregar-pregunta/agregar-pregunta.component';
import { EditarPreguntaComponent } from './administrador/editar-pregunta/editar-pregunta.component';
import { EditarCursoComponent } from './administrador/editar-curso/editar-curso.component';

const routes: Routes = [
  {
    path: '',
    component: AdministradorComponent,
    children: [
      {
        path: 'agregar_p', component: AgregarProfesorComponent
      },
      {
        path: 'agregar_pregunta', component: AgregarPreguntaComponent
      },
      {
        path: 'agregar_pregunta/editar/:id', component: EditarPreguntaComponent
      },
      {
        path: 'agregar_pregunta/resp_correcta/:id', component: AddRespCorrectaComponent
      },
      {
        path: 'agregar_pregunta/pos_respuesta/:id', component: AddPosRespuestaComponent
      },
      {
        path: 'agregar_c', component: AgregarCursoComponent
      },
      {
        path: 'eliminar_p/editar_p/:id', component: EditarProfesorComponent
      },
      {
        path: 'asignar_curso', component: AsignarCursoComponent
      },
      {
        path: 'eliminar_c', component: EliminarCursoComponent
      },
      {
        path: 'eliminar_c/editar_c/:id', component: EditarCursoComponent
      },
      {
        path: 'eliminar_p', component: EliminarProfesorComponent
      },
      {
        path: 'enviar_certificados', component: EnviarCertificadosComponent
      },
      {
        path: 'verificar_transferencia', component: VerificarTransferenciaComponent
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
    AdministradorComponent,
    AgregarProfesorComponent,
    AgregarCursoComponent,
    EliminarProfesorComponent,
    EliminarCursoComponent,
    AsignarCursoComponent,
    VerificarTransferenciaComponent,
    EnviarCertificadosComponent,
    EditarProfesorComponent,
    AddPosRespuestaComponent,
    AddRespCorrectaComponent,
    AgregarPreguntaComponent,
    EditarPreguntaComponent,
    EditarCursoComponent
  ]
})
export class AdministradorModule { }
