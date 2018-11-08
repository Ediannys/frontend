import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URL } from 'src/app/env';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  obtenerEstudiante(idUsuario: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/identificar_usuario/${idUsuario}`, httpOptions);

  }

  mostrarCursos(id: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/mostrar_c/${id}`, httpOptions);

  }

  mostrarExamen(idCurso: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/examen/${idCurso}`, httpOptions);

  }

  calificarExamen(idCurso: number, respuestas: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(`${API_URL}/calificar/${idCurso}`, respuestas, httpOptions);
  }

  registarExamen(registro: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(`${API_URL}/registrar_examen`, registro, httpOptions);
  }

  cursosInscripcion(id: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/inscripcion/${id}`, httpOptions);
  }

  pagarCurso(pago: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(`${API_URL}/pagar_curso`, pago, httpOptions);
  }
}
