import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {

  private cursoForm: FormGroup;

  constructor(private administradorService: AdministradorService) {

    this.cursoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      descripcion: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      inicia: new FormControl('', Validators.required),
      finaliza: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required)
    });
  }

   get nombre() { return this.cursoForm.get('nombre'); }
   get descripcion() { return this.cursoForm.get('descripcion'); }
   get inicia() { return this.cursoForm.get('inicia'); }
   get finaliza() { return this.cursoForm.get('finaliza'); }
   get precio() { return this.cursoForm.get('precio'); }

  ngOnInit() {
  }

  agregarCurso(): void {

    if(this.cursoForm.valid == true){

    console.log(this.cursoForm.value);

    this.administradorService.agregarCurso(this.cursoForm).
    subscribe(response => {
      alert('Curso agregado!');
      console.log(response);
    }, error => {
        alert('Ocurrio un problema al crear el Curso!');
        console.log(error);
    });
  }
  else alert("Tiene errores en el formulario");
  }
}
