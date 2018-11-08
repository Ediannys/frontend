import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdministradorService } from '../administrador.service';
import { Curso } from '../../interfaces/iCurso';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  id: any;
  arreglo_cursos: Curso[];
  curso: Curso = {
    id: null,
    nombre: null,
    descripcion: null,
    inicia: null,
    finaliza: null,
    precio: null,
  };

  private cursoForm: FormGroup;

  constructor(private administradorService: AdministradorService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);

    this.cursoForm = new FormGroup({
      id: new FormControl(this.id),
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      inicia: new FormControl('', Validators.required),
      finaliza: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required)
    });
    
    this.mostrarCurso();
  }

  ngOnInit() {
  }

  agregarCurso(): void {

    console.log(this.cursoForm.value);

    this.administradorService.agregarCurso(this.cursoForm).
    subscribe(response => {
      alert('Registro Exitoso!');
      console.log(response);
    }, error => {
        alert('Ocurrio un problema al registrar profesor!');
        console.log(error);
    });
  }

  modificarCurso(): void {
    this.administradorService.modificarCurso(this.curso).
    subscribe(response => {
      alert('Actualizacion exitosa!');
      console.log(response);
    }, error => {
        alert('Ocurrio un problema al actualizar el curso!');
        console.log(error);
    });
  }

   mostrarCurso(): void {
    this.administradorService.mostrarCursos().
      subscribe(response => {
        const x = response;
        // var b = JSON.stringify(x);

        this.arreglo_cursos = JSON.parse(x);
        this.curso = this.arreglo_cursos.find((m) => { return m.id == this.id });
        console.log(this.curso);
      }, error => {
        alert('Ocurrio un problema al registrar profesor!');
        console.log(error);
      });
  }
}