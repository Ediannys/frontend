import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  usuario: any;
  nombre: string;
  apellido: string;

  constructor(private router: Router,
                private _route: ActivatedRoute,
                  private estudianteService: EstudianteService) { this.nombre = ''; this.apellido = ''; }

  ngOnInit() {

    const id = +this._route.snapshot.paramMap.get('id');
    console.log(id);
    this.obtenerEstudiante(id);

  }

  obtenerEstudiante(id: number): void {
    this.estudianteService.obtenerEstudiante(id).
      subscribe(response => {
          this.usuario = response;
          this.nombre = this.usuario.nombre;
          this.apellido = this.usuario.apellido;
          console.log(this.usuario);
      }, error => {
        console.log(error);
      });
  }

  salir(): void {
    this.router.navigateByUrl('/home');
  }

}
