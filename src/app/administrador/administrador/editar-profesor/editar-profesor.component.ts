import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';
import { Usuario } from '../../interfaces/iUsuario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-profesor',
  templateUrl: './editar-profesor.component.html',
  styleUrls: ['./editar-profesor.component.css']
})
export class EditarProfesorComponent implements OnInit {

  arreglo_profesores: Usuario[];
  profesor: Usuario = {
    id: null,
    nombre: null,
    apellido: null,
    cedula: null,
    correo: null,
    tipo: null,
  };
  id: any;
  constructor(private administradorService: AdministradorService, private activatedRoute: ActivatedRoute) {
    // this.mostrarProfesores();
    this.id = this.activatedRoute.snapshot.params['id'];
    // console.log(this.id);
  }

  ngOnInit() {
  }

  // mostrarProfesores(): void {

  //   this.administradorService.mostrarProfesores().
  //     subscribe(response => {
  //       const x = response;
  //       // var b = JSON.stringify(x);

  //       this.arreglo_profesores = JSON.parse(x);
  //       this.profesor = this.arreglo_profesores.find((m) => m.id === this.id );
  //       console.log(this.arreglo_profesores);
  //     }, error => {
  //       alert('Ocurrio un problema al registrar profesor!');
  //       console.log(error);
  //     });
  // }

}
