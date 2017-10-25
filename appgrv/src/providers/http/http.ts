import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpProvider {

  idUser : number = 6;
  datos : any;
  URL : string = 'http://localhost:8455';
  PATH_CURSOS_X_AREAS : string = '/malla/cursos/academicos?idUsuario=' + this.idUser + '&idArea=';
  PATH_INICIAR_SESION : string = '/api/user/authenticate';
  path2 : string = 'https://randomuser.me/api/?results=' + this.idUser;
  private header = new Headers({ 'content-type': 'application/json' });
  private options = new RequestOptions({ headers: this.header });

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  cargarCA(_idArea){
    return this.http.get(this.URL + this.PATH_CURSOS_X_AREAS + _idArea)
    .map(res => res.json(),
      err => {
        console.log(err);
      }
    )
  }

  public ingresarLogin(accederUsuario): Observable<Response> {
    console.log(accederUsuario, ' user y contra');
    const ruta = this.URL + this.PATH_INICIAR_SESION;
    console.log(ruta, ' ruta');
    return this.http.post(ruta,accederUsuario, this.options).map(
      (response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error('This request has failed ' + response.status);
        }
        console.log(response, ' respuesta');
        return response;

      })

  }

}
