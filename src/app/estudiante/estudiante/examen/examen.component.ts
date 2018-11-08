import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../estudiante.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  idEstudiante: number;
  idCurso: number;
  titulo: string;
  preguntas: any[];

  pre: any[];
  respuestas: any[];

  res_pre: any;
  respuesta_pregunta: any[];
  respuesta_prueba: any;

  constructor(private estudianteService: EstudianteService, private route: ActivatedRoute) {

    this.respuestas = new Array();
    this.pre = new Array();
    this.respuesta_pregunta = new Array();
  }

  ngOnInit() {
    this.idEstudiante = +this.route.snapshot.parent.paramMap.get('id');
    this.idCurso = +this.route.snapshot.paramMap.get('id');
    console.log(this.idCurso);
    console.log(this.idEstudiante);
    this.mostrarExamen(this.idCurso);
  }

  mostrarExamen(idCurso: number): void {
    this.estudianteService.mostrarExamen(idCurso).
      subscribe(response => {
        this.preguntas = response.Examen;
        this.titulo = response.Examen[0].curso;

        for (let i = 0; i < this.preguntas.length; i++) {
          this.pre.push(this.preguntas[i].idPregunta);
        }
        console.log(this.preguntas);

      }, error => {
        alert('Ocurrio un problema al mostrar examen!');
        console.log(error);
      });
  }

  calificarExamen(): void {

    let registrar_examen: any;

    for (let i = 0; i < this.pre.length; i++) {

      this.res_pre = {
        'pregunta': this.pre[i],
        'respuesta': this.respuestas[i]
      };
      this.respuesta_pregunta.push(this.res_pre);
    }

    this.respuesta_prueba = {'pregunta': this.respuesta_pregunta};

    this.estudianteService.calificarExamen(this.idCurso, this.respuesta_prueba).
      subscribe(response => {
          console.log(response);

          if (response.aprobacion === true) {
            alert('Felicitaciones usted aprobo el examen con un puntaje de ' + response.calificacion + ' puntos');

            registrar_examen = {
              'idEstudiante': this.idEstudiante,
              'idPrueba': this.preguntas[0].idPrueba,
              'calificacion': response.calificacion
            };
            console.log(registrar_examen);
            this.registroExamen(registrar_examen);

          } else {
            alert('Lo sentimos usted reprobo el examen con un puntaje de ' + response.calificacion + ' puntos');
          }

      }, error => {
        alert('Ocurrio un problema al calificar examen!');
        console.log(error);
      });
  }

  registroExamen(registro: any): void {
    this.estudianteService.registarExamen(registro).
      subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }
}
