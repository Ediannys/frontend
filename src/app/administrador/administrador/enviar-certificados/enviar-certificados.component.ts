import { Component, OnInit } from '@angular/core';
import { Curso } from '../../interfaces/iCurso';
import { EstAprobado } from '../../interfaces/iEstAprobados';
import { AdministradorService } from '../administrador.service';
import { HttpClient } from '@angular/common/http';
import {SelectionModel} from '@angular/cdk/collections';

import {MatTableDataSource} from '@angular/material';





@Component({
  selector: 'app-enviar-certificados',
  templateUrl: './enviar-certificados.component.html',
  styleUrls: ['./enviar-certificados.component.css']
})
export class EnviarCertificadosComponent implements OnInit {

   /*Selectores*/
  idCurso= ""
 
/*arreglos*/
  arreglo_cursos: Curso[];
  curso: Curso = {
    id: null,
    nombre: null,
    descripcion:null,
    inicia: null,
    finaliza: null,
    precio: null, 
  };


  arreglo_est: EstAprobado[];
  est_aprob: EstAprobado = {
    id: null,
    cedula: null,
    apellido: null,
    nombre: null,
    curso: null,
    correo: null,
    status:null,
    certificado: null
  };

  



  constructor(private administradorService: AdministradorService, private httpClient: HttpClient) 
  { 
  	this.mostrarCursos();

  }

  getPosition(status) { 
    switch (status) {
      case false:
        return 'false';
      case true:
        return 'true';
    }
    console.log(status);
  }



  mostrarCursos(): void {

    this.administradorService.mostrarCursos().
    subscribe(response => {
      var x = response;
      var b= JSON.stringify(x);
  
      this.arreglo_cursos= JSON.parse(x);
      console.log(this.arreglo_cursos);
    }, error => {
        alert('Ocurrio un problema al mostrar los cursos!');
        console.log(error);
    });
   }

    mostrarEstAprobados(): void {

    this.administradorService.mostrarEstudiantesAprobados(this.idCurso).
    subscribe(response => {
      var x = response;
      this.arreglo_est= JSON.parse(x);
      
      console.log(this.arreglo_est);
    }, error => {
        alert('Ocurrio un problema al mostrar los estudiantes!');
        console.log(error);
    });
   }

   enviarCertificado(id): void {
    
    this.administradorService.enviarCertificado(id).
    subscribe(response => {
      alert("Envio aprobado");
      console.log(response);
      

    }, error => {
        alert('Ocurrio un problema al enviar el certificado!');
        console.log(error);
    });

  }

  ngOnInit() {
  }

}
