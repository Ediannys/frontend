import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { API_URL } from '../../env';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

  obtenerAdministrador(idUsuario: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/identificar_usuario/${idUsuario}`, httpOptions);

  }

  agregarProfesor(agregarForm: FormGroup): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(`${API_URL}/agregar_p`, agregarForm.value, httpOptions);
  }

  agregarPregunta(id, pregunta): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(`${API_URL}/agregar_pregunta/`+id, pregunta, httpOptions);
  }

  mostrarEstudiantesAprobados(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(`${API_URL}/mostrar_est_aprob/` + id, httpOptions);

  }


  agregarPosResp(pos_resp): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(`${API_URL}/agregar_pos_resp/`+pos_resp.idPregunta, pos_resp, httpOptions);
  }

  modificarRespCorr(respuesta)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http
      .put(`${API_URL}/modificar_resp_corr/`+respuesta.id, respuesta, httpOptions);
  }


      modificarCurso(curso)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http
      .put(`${API_URL}/modificar_c/`+curso.id, curso, httpOptions);
  }

  agregarRespCorr(resp_corr): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(`${API_URL}/agregar_resp_corr/`+resp_corr.idPregunta, resp_corr, httpOptions);
  }

  mostrarRespCorr(id): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/mostrar_resp_corr/`+id, httpOptions);   
  }

  eliminarRespCorr(id)
  {
     return this.http.delete(`${API_URL}/eliminar_resp_corr/`+id);
  }


  mostrarProfesores(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/mostrar_p`, httpOptions);
  }

  eliminarProfesor(id) {
    return this.http.delete(`${API_URL}/eliminar_p/` + id);
  }


  agregarCurso(agregarForm: FormGroup): Observable<any> {

    console.log(agregarForm.get('nombre').value);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(`${API_URL}/agregar_c`, agregarForm.value, httpOptions);
  }


  mostrarCursos(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/mostrar_c`, httpOptions);

  }

  modificarPosResp(respuesta)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http
      .put(`${API_URL}/modificar_pos_resp/`+respuesta.id, respuesta, httpOptions);
  }

  eliminarPosResp(id)
  {
     return this.http.delete(`${API_URL}/eliminar_pos_resp/`+id);
  }

  mostrarPosResp(id): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/mostrar_pos_resp/`+id, httpOptions);   
  }


  mostrarPagosEstudiantes(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(`${API_URL}/mostrar_pagos_c/` + id, httpOptions);

  }

  eliminarCurso(id) {
    return this.http.delete(`${API_URL}/eliminar_c/` + id);
  }

  agregarCursoProfesor(objeto): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(`${API_URL}/agregar_cp`, objeto, httpOptions);

  }
  aprobarTransferencia(id)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .put(`${API_URL}/aprobar_transf/`+id,httpOptions);
  }

   mostrarPreguntas(id): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/mostrar_preguntas/`+id, httpOptions);   
  }

  mostrarPregunta(id): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/mostrar_pregunta/`+id, httpOptions);   
  }
  modificarPregunta(pregunta)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http
      .put(`${API_URL}/modificar_pregunta/`+pregunta.id, pregunta, httpOptions);
  }

  eliminarPregunta(id)
  {
     return this.http.delete(`${API_URL}/eliminar_pregunta/`+id);
  }

enviarPDF(est_aprob)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .put(`${API_URL}/enviar_PDF/`+est_aprob.nombre/est_aprob.curso/est_aprob.correo,httpOptions);
  }

enviarCertificado(id)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .put(`${API_URL}/aprobar_envio/`+id,httpOptions);
  }

}
