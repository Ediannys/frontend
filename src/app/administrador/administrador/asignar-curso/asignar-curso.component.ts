import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../interfaces/iUsuario';
import { Curso } from '../../interfaces/iCurso';

@Component({
  selector: 'app-asignar-curso',
  templateUrl: './asignar-curso.component.html',
  styleUrls: ['./asignar-curso.component.css']

})

export class AsignarCursoComponent implements OnInit {

  /*Selectores*/
  idUsuario = '';
  idCurso = '';
  seccion = '';
  nCupos = '';


  /*arreglos*/
  arreglo_profesores: Usuario[];
  profesor: Usuario = {
    id: null,
    nombre: null,
    apellido: null,
    cedula: null,
    correo: null,
    tipo: null,
  };

  arreglo_cursos: Curso[];
  curso: Curso = {
    id: null,
    nombre: null,
    descripcion: null,
    inicia: null,
    finaliza: null,
    precio: null,
  };


  secciones: string[] = ['1', '2', '3'];
  cupos: string[] = ['10', '15', '20'];


  constructor(private administradorService: AdministradorService, private httpClient: HttpClient) {

    this.mostrarProfesores();
    this.mostrarCursos();

  }

  ngOnInit() {
  }

  mostrarProfesores(): void {

    this.administradorService.mostrarProfesores().
      subscribe(response => {
        const x = response;
        // var b = JSON.stringify(x);

        this.arreglo_profesores = JSON.parse(x);
        console.log(this.arreglo_profesores);
      }, error => {
        alert('Ocurrio un problema al registrar profesor!');
        console.log(error);
      });
  }

  mostrarCursos(): void {

    this.administradorService.mostrarCursos().
      subscribe(response => {
        const x = response;
        // b = JSON.stringify(x);

        this.arreglo_cursos = JSON.parse(x);
        console.log(this.arreglo_cursos);
      }, error => {
        alert('Ocurrio un problema al mostrar los cursos!');
        console.log(error);
      });
  }

  agregarCursoProfesor(): void {

    const myJSON = {
      'idUsuario': this.idUsuario, 'idCurso': this.idCurso,
      'seccion': this.seccion, 'nCupos': this.nCupos
    };

    this.administradorService.agregarCursoProfesor(myJSON).subscribe((data) => {
      alert('Curso eliminado');
      this.mostrarCursos();
      console.log(data);
    },
      (error) => {
        console.log(error);
        alert('ocurrio un error');
      });



  }








}
