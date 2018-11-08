import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudianteService } from '../estudiante.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  id: number;
  private pagoForm: FormGroup;
  cursos: any[];
  pago: any;

  constructor(private _route: ActivatedRoute, private estudianteService: EstudianteService) {
    this.pagoForm = new FormGroup({
      nTransferencia: new FormControl('',[Validators.required, Validators.maxLength(8)]),
      monto: new FormControl('',[Validators.required, Validators.maxLength(5)]),
      fecha: new FormControl('', Validators.required),
      seccion: new FormControl('', Validators.required)
    });
  }

  get nTransferencia() { return this.pagoForm.get('nTransferencia'); }
  get monto() { return this.pagoForm.get('monto'); }
  get fecha() { return this.pagoForm.get('fecha'); }
  get seccion() { return this.pagoForm.get('seccion'); }



  ngOnInit() {

    this.id = +this._route.snapshot.parent.paramMap.get('id');
    this.mostrarCursos(this.id);
  }

  mostrarCursos(id: number): void {
    console.log('usuario: ' + id);

    this.estudianteService.cursosInscripcion(id).
      subscribe(response => {
          this.cursos = response.Cursos;
          console.log(this.cursos);
      }, error => {
        console.log(error);
      });
  }

  pagarCurso(idCurso: number): void {

    if(this.pagoForm.valid == true){

    this.pago = {
      'idUsuario': this.id,
      'idCurso': idCurso,
      'nTransferencia': this.pagoForm.value.nTransferencia,
      'monto': this.pagoForm.value.monto,
      'fecha': this.pagoForm.value.fecha,
      'seccion': this.pagoForm.value.seccion
    };

    console.log(this.pago);

    this.estudianteService.pagarCurso(this.pago).
      subscribe(response => {
        alert('Curso pagado exitosamente');
        console.log(response);
      }, error => {
        console.log(error);
      });

    }
    else alert("Tiene errores en el formulario");
  }

}
