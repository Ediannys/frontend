import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../../interfaces/iCurso';

@Component({
  selector: 'app-eliminar-curso',
  templateUrl: './eliminar-curso.component.html',
  styleUrls: ['./eliminar-curso.component.css']
})

export class EliminarCursoComponent implements OnInit {

  arreglo_cursos: Curso[];
  curso: Curso = {
    id: null,
    nombre: null,
    descripcion: null,
    inicia: null,
    finaliza: null,
    precio: null,
  };

  constructor(private administradorService: AdministradorService, private httpClient: HttpClient) {

    this.mostrarCursos();
  }

  mostrarCursos(): void {

    this.administradorService.mostrarCursos().
      subscribe(response => {
        const x = response;
        // var b = JSON.stringify(x);

        this.arreglo_cursos = JSON.parse(x);
        console.log(this.arreglo_cursos);
      }, error => {
        alert('Ocurrio un problema al registrar profesor!');
        console.log(error);
      });
  }

  eliminarCurso(id): void {

    if (confirm('Seguro que deseas eliminar este curso')) {
      this.administradorService.eliminarCurso(id).subscribe((data) => {
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

  ngOnInit() {
  }

}


