import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HomeService } from '../home.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private userForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<SignUpComponent>, private homeService: HomeService) {

    this.userForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      apellido: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      cedula: new FormControl('', [Validators.required, Validators.maxLength(9)]),
      contraseña: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email])
    });
   }

   get nombre() { return this.userForm.get('nombre'); }
   get apellido() { return this.userForm.get('apellido'); }
   get cedula() { return this.userForm.get('cedula'); }
  

  ngOnInit() {
  }

  ingresar() {

    if(this.userForm.valid==true){

    this.homeService.registroUser(this.userForm).
      subscribe(response => {
        alert('Registro Exitoso!');
        console.log(response);
        localStorage.setItem('token', response.token_acceso);
      }, error => {
          alert('Ocurrio un problema al registrar usuario!');
          console.log(error);
      });
    }
    else alert("El formulario tiene errores");
    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();
  }

  getErrorMessage() {
    return this.userForm.get('correo').hasError('required') ? 'Debe Ingresar Una Direccion De Correo Electronico' :
        this.userForm.get('correo').hasError('correo') ? 'Correo Invalido' :
            '';
  }
}
