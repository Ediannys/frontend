import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';
import { Pregunta } from '../../interfaces/iPregunta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-pregunta',
  templateUrl: './editar-pregunta.component.html',
  styleUrls: ['./editar-pregunta.component.css']
})
export class EditarPreguntaComponent implements OnInit {
	id: any;
	arreglo_preguntas: Pregunta[];
	var_pregunta: Pregunta = {
    id: null,
    idPrueba: null,
    pregunta: null,
    ponderacion: null
  };

  constructor(private administradorService: AdministradorService, private activatedRoute: ActivatedRoute)
  { 
  	this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
  	this.mostrarPregunta(this.id);
  }

  ngOnInit() {
  }

    mostrarPregunta(id): void {
    this.administradorService.mostrarPregunta(id).
      subscribe(response => {
        const x = response;
        this.var_pregunta = JSON.parse(x);
        console.log(this.var_pregunta);
      }, error => {
        alert('Ocurrio un problema al registrar profesor!');
        console.log(error);
      });
  }

   modificarPregunta(): void {
    this.administradorService.modificarPregunta(this.var_pregunta).
    subscribe(response => {
      console.log('Actualizacion exitosa!');
      console.log(response);
    }, error => {
        alert('Ocurrio un problema al actualizar el curso!');
        console.log(error);
    });
  }
}
