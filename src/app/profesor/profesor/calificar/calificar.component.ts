import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from '../profesor.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.css']
})
export class CalificarComponent implements OnInit {

  curso_seccion: any;
  cursoForm: FormGroup;
  estudiantes: any;

  calificacion: any;

  constructor(private _route: ActivatedRoute, private profesorService: ProfesorService) {
    this.cursoForm = new FormGroup({
      idSeccion: new FormControl('')
    });
  }

  ngOnInit() {
    const id = +this._route.snapshot.parent.paramMap.get('id');
    console.log(id);
    this.cursoSeccion(id);
  }

  cursoSeccion(id: number): void {
    this.profesorService.cursoSeccion(id).
      subscribe(response => {
        this.curso_seccion = response;
        console.log(this.curso_seccion);
      }, error => {
        console.log(error);
      });
  }

  estudiantesSeccion(): void {
    console.log(this.cursoForm.value.idSeccion);

    this.profesorService.estudiantesSeccion(this.cursoForm.value.idSeccion).
      subscribe(response => {
        this.estudiantes = response;
        console.log(this.estudiantes);
      }, error => {
        console.log(error);
      });
  }

  desabilitar_R(id: number): void {

    this.calificacion = {
      'id': id,
      'aprobacion': true
    };

    alert("Estudiante no aprobado");
    this.profesorService.calificarEstudiante(this.calificacion).
      subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  desabilitar_A(id: number): void {

    this.calificacion = {
      'id': id,
      'aprobacion': false
    };
    alert("Estudiante no reprobado");
  }
}
