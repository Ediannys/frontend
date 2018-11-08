import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../interfaces/iUsuario';


@Component({
  selector: 'app-eliminar-profesor',
  templateUrl: './eliminar-profesor.component.html',
  styleUrls: ['./eliminar-profesor.component.css']
})
export class EliminarProfesorComponent implements OnInit {

  arreglo_profesores: Usuario[];
  profesor: Usuario = {
    id: null,
    nombre: null,
    apellido: null,
    cedula: null,
    correo: null,
    tipo: null,
  };


  constructor(private administradorService: AdministradorService, private httpClient: HttpClient) {
    this.mostrarProfesores();
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

  eliminarProfesor(id): void {

    if (confirm('Seguro que deseas eliminar este usuario')) {
      this.administradorService.eliminarProfesor(id).subscribe((data) => {
        alert('Usuario eliminado');
        this.mostrarProfesores();
        console.log(data);
      },
        (error) => {
          console.log(error);
          alert('ocurrio un error');
        });
    }

  }



}
