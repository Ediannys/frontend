import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../estudiante.service';

import { Curso } from '../../interfaces/iCursos';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Curso[];

  constructor(private estudianteService: EstudianteService, private _route: ActivatedRoute) { }

  ngOnInit() {

    const id = +this._route.snapshot.parent.paramMap.get('id');
    this.mostrarCursos(id);
    console.log(id);
  }

  mostrarCursos(id: number): void {

    this.estudianteService.mostrarCursos(id).
      subscribe(response => {
        this.cursos = response;
        console.log(this.cursos);
      }, error => {
        alert('Ocurrio un problema al mostrar cursos!');
        console.log(error);
      });
  }
}
