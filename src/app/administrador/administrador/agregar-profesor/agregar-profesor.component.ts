import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-agregar-profesor',
  templateUrl: './agregar-profesor.component.html',
  styleUrls: ['./agregar-profesor.component.css']
})
export class AgregarProfesorComponent implements OnInit {

  private profesorForm: FormGroup;

  constructor(private administradorService: AdministradorService) {


    this.profesorForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      apellido: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      cedula: new FormControl('',[Validators.required, Validators.maxLength(9)]),
      contraseña: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email])
    });

  }

  get nombre() { return this.profesorForm.get('nombre'); }
  get apellido() { return this.profesorForm.get('apellido'); }
  get cedula() { return this.profesorForm.get('cedula'); }
  


  ngOnInit() {
  }

  getErrorMessage() {
    return this.profesorForm.get('correo').hasError('required') ? 'Debe Ingresar Una Direccion De Correo Electronico' :
        this.profesorForm.get('correo').hasError('correo') ? 'Correo Invalido' :
            '';
  }

  agregarProfesor(): void {

    if(this.profesorForm.valid == true){

    this.administradorService.agregarProfesor(this.profesorForm).
    subscribe(response => {
      alert('Registro Exitoso!');
      console.log(response);
      localStorage.setItem('token', response.token_acceso);
    }, error => {
        alert('Ocurrio un problema al registrar profesor!');
        console.log(error);
    });
  }
  else alert("Tiene errores en el formulario");
  }
}
