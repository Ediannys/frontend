import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesorService } from './profesor.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  usuario: any;
  nombre: string;
  apellido: string;

  constructor(private router: Router,
              private _route: ActivatedRoute,
                private profesorService: ProfesorService) { this.nombre = ''; this.apellido = ''; }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    console.log(id);
    this.obtenerProfesor(id);
  }

  obtenerProfesor(id: number): void {
    this.profesorService.obtenerProfesor(id).
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
