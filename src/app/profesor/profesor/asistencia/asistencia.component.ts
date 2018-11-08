import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfesorService } from '../profesor.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  curso_seccion: any;
  cursoForm: FormGroup;
  fechaForm: FormGroup;
  estudiantes: any;
  asistencia: any;

  constructor(private _route: ActivatedRoute, private profesorService: ProfesorService) {
    this.cursoForm = new FormGroup({
      idSeccion: new FormControl('')
    });

    this.fechaForm = new FormGroup({
      fecha: new FormControl('', Validators.required)
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

  registrarAsistencia(id: number): void {

    this.asistencia = {
      'idEstudiante': id,
      'fecha': this.fechaForm.value.fecha
    };

    console.log(this.asistencia);

    this.profesorService.registrarAsistencia(this.asistencia).
      subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }
}
