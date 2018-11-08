import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PosibleRespuesta } from '../../interfaces/iPosibleRespuesta';
import { Pregunta } from '../../interfaces/iPregunta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-pos-respuesta',
  templateUrl: './add-pos-respuesta.component.html',
  styleUrls: ['./add-pos-respuesta.component.css']
})
export class AddPosRespuestaComponent implements OnInit {

  id: any;
  arreglo_respuestas: PosibleRespuesta[];
    show_table:boolean = false;
    show_p:boolean = false;
   var_respuesta: PosibleRespuesta = {
    id: null,
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
    this.mostrarPosResp(this.id);
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



  agregarPosResp(): void {

    console.log(this.var_respuesta);
    this.administradorService.agregarPosResp(this.var_respuesta).
    subscribe(response => {
      console.log('Pregunta agregada!');
      this.mostrarPosResp(this.id);
      console.log(response);
    }, error => {
        alert('Ocurrio un problema al agregar Pregunta!');
        console.log(error);
    });
  }

  modificarPosResp(id, respuesta): void {

    this.var_respuesta.id=id;
    this.var_respuesta.respuesta=respuesta;
    console.log(this.var_respuesta);
    this.administradorService.modificarPosResp(this.var_respuesta).
    subscribe(response => {
      alert('Actualizacion exitosa!');
      console.log(response);
    }, error => {
        alert('Ocurrio un problema al actualizar el curso!');
        console.log(error);
    });
  }

  eliminarPosResp(id): void {
    console.log(id);
      this.administradorService.eliminarPosResp(id).subscribe((data) => {
        console.log('Respuesta eliminada');
        this.mostrarPosResp(this.id);
        console.log(data);
      },
        (error) => {
          console.log(error);
          alert('ocurrio un error');
        });
    

  }

  comprobarArreglo()
  {
    if(this.arreglo_respuestas.length ==0)
    {
        this.show_table = false;
        this.show_p = true;
    }
    else 
    {
        this.show_table = true;
         this.show_p = false;
    }
  }


  mostrarPosResp(id): void {

    this.administradorService.mostrarPosResp(id).
      subscribe(response => {
        const x = response;
        this.arreglo_respuestas = JSON.parse(x);
        this.comprobarArreglo();
         
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
