import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pregunta } from '../../interfaces/iPregunta';
import { Curso } from '../../interfaces/iCurso';


@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.css']
})
export class AgregarPreguntaComponent implements OnInit {

	private cursoForm: FormGroup;
 	arreglo_preguntas: Pregunta[];
  show_table:boolean = false;
  show_p:boolean = false;
 	var_pregunta: Pregunta = {
    id: null,
    idPrueba: null,
    pregunta: null,
    ponderacion: null
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

  private preguntaForm: FormGroup;

  constructor(private administradorService: AdministradorService)
  { 
    this.mostrarCursos();

    this.preguntaForm = new FormGroup({
      pregunta: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      ponderacion: new FormControl('', [Validators.required, Validators.maxLength(20)])
      
    });
  }

  get pregunta() { return this.preguntaForm.get('pregunta'); }
  get ponderacion() { return this.preguntaForm.get('ponderacion'); }

  ngOnInit() {}

  agregarPregunta(): void {

   if(this.preguntaForm.valid == true && this.curso.id!=null){


    console.log(this.var_pregunta);
    this.administradorService.agregarPregunta(this.curso.id, this.var_pregunta).
    subscribe(response => {
      console.log('Pregunta agregada!');
      this.mostrarPreguntas(this.curso.id);
      console.log(response);
    }, error => {
        alert('Ocurrio un problema al agregar la pregunta!');
        console.log(error);
    });
  }
  else alert("Tiene errores en el formulario");
  }


  cargarId(id)
  { this.curso.id=id; 
    console.log(id);
    this.mostrarPreguntas(id);

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

  mostrarPreguntas(id): void {


    this.administradorService.mostrarPreguntas(id).
      subscribe(response => {
        const x = response;
        // b = JSON.stringify(x);
        this.show_table = true;
        this.show_p = false;
        this.arreglo_preguntas = JSON.parse(x);

        console.log(this.arreglo_preguntas);
      }, error => {
         this.show_table = false;
         this.show_p = true;
         console.log(error);
      });
  }

  eliminarPregunta(id): void {

    if (confirm('¿Seguro que deseas eliminar esta pregunta?')) {
      this.administradorService.eliminarPregunta(id).subscribe((data) => {
        console.log('Pregunta eliminada');
        this.mostrarPreguntas(this.curso.id);
        console.log(data);
      },
        (error) => {
          console.log(error);
          alert('ocurrio un error');
        });
    }

  }


  
}
