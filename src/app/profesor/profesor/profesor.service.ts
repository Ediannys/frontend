import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URL } from 'src/app/env';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient) { }

  obtenerProfesor(idUsuario: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/identificar_usuario/${idUsuario}`, httpOptions);

  }

  cursoSeccion(idUsuario: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/cursos_secciones/${idUsuario}`, httpOptions);

  }

  estudiantesSeccion(idSeccion: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/mostrar_estudiantes/${idSeccion}`, httpOptions);

  }

  calificarEstudiante(calificacion: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(`${API_URL}/calificar`, calificacion, httpOptions);

  }

  registrarAsistencia(asistencia: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(`${API_URL}/asistencia`, asistencia, httpOptions);

  }

}
