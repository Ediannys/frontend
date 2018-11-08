import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Respuesta } from '../../interfaces/iRespuesta';
import { Pregunta } from '../../interfaces/iPregunta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-resp-correcta',
  templateUrl: './add-resp-correcta.component.html',
  styleUrls: ['./add-resp-correcta.component.css']
})
export class AddRespCorrectaComponent implements OnInit {
	id: any;
	arreglo_respuestas: Respuesta[];
  	show_table:boolean = false;
  	show_p:boolean = false;
 	var_respuesta: Respuesta = {
    id: null,
    idPrueba: null,
    idPregunta: null,
    respuesta: null
  };
  var_pregunta: Pregunta = {
    id: null,
    idPrueba: null,
    pregunta: null,
    ponderacion: null
  };


  constructor(private administradorService: AdministradorService, private activatedRoute: ActivatedRoute)
  { 
  	//aqui recibo el idPregunta
    this.id = this.activatedRoute.snapshot.params['id'];
    this.var_respuesta.idPregunta=this.id;
    console.log(this.id);
  	this.mostrarPregunta(this.id);
  	this.mostrarRespCorr(this.id);
  }


  mostrarPregunta(id): void {
    this.administradorService.mostrarPregunta(id).
      subscribe(response => {
        const x = response;
        this.var_pregunta = JSON.parse(x);
        this.var_respuesta.idPrueba =this.var_pregunta.idPrueba;

        console.log(this.var_pregunta);
      }, error => {
        alert('Ocurrio un problema al registrar profesor!');
        console.log(error);
      });
  }



  agregarRespCorr(): void {

    console.log(this.var_respuesta);
    this.administradorService.agregarRespCorr(this.var_respuesta).
    subscribe(response => {
      console.log('Pregunta agregada!');
      this.mostrarRespCorr(this.id);
      console.log(response);
    }, error => {
        alert('Ocurrio un problema al agregar Pregunta!');
        console.log(error);
    });
  }

  modificarRespCorr(id, respuesta, idPrueba): void {

  	this.var_respuesta.id=id;
  	this.var_respuesta.respuesta=respuesta;
    this.var_respuesta.idPrueba=idPrueba;
  	console.log(this.var_respuesta);
    this.administradorService.modificarRespCorr(this.var_respuesta).
    subscribe(response => {
      alert('Actualizacion exitosa!');
      console.log(response);
    }, error => {
        alert('Ocurrio un problema al actualizar el curso!');
        console.log(error);
    });
  }

  eliminarRespCorr(id): void {
  	console.log(id);
      this.administradorService.eliminarRespCorr(id).subscribe((data) => {
        console.log('Respuesta eliminada');
        this.mostrarRespCorr(this.id);
        console.log(data);
      },
        (error) => {
          console.log(error);
          alert('ocurrio un error');
        });
    

  }


  mostrarRespCorr(id): void {

    this.administradorService.mostrarRespCorr(id).
      subscribe(response => {
        const x = response;
        // b = JSON.stringify(x);
        this.show_table = true;
        this.show_p = false;
        this.arreglo_respuestas = JSON.parse(x);

        console.log(this.arreglo_respuestas);
      }, error => {
         this.show_table = false;
         this.show_p = true;
         console.log(error);
      });
  }

  ngOnInit() {
  }

}
