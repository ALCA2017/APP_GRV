import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
  private Url: string ='http://localhost:8455/';
  private INICIAR_SESION: string = this.Url + 'api/user/authenticate';
  private CURSOS_AREAS_X_USUARIO: string = this.Url + 'alumnos/cursos?idUsuario=';


  private header = new Headers({ 'content-type': 'application/json' });
  private options = new RequestOptions({ headers: this.header });

  constructor(public http: Http) {    
    console.log('Hello UserService Provider---------------------------------------');
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25')
    .map(res => res.json())
    .toPromise();
  }

  // Servicio REST -----> POST

  iniciar_sesion(datosAcceso : ISIniciarSesion): Observable<Response>{
    const ruta: string = this.INICIAR_SESION;
    return this.http.post(ruta, datosAcceso, this.options).map(
      response => {
        console.log("1er Inicio de Sesion:", response);
        return response;
      }
    ).catch(() => Observable.throw('Error en el Servicio AUTHENTICATE.'));
  }

  cursos_areas_x_alumnos(idUsuario){
    return this.http.get(this.CURSOS_AREAS_X_USUARIO + idUsuario)
    .map( res => res.json())
    .toPromise();
  }

  load_cursos(){
      
  }


//  iniciar_sesion(){
// 2DA OPCION **************************
//    let datos = { usu:'usu', pass:'pass'}
//    let headers = new Headers({
//      'Content-Type': 'application/x-www-form-urlencoded'
//    });
//    let _options = new RequestOptions({
//      headers: headers
//    });
//    var url = this.INICIAR_SESION;
//    return new Promise(resolve => {
//      this.http.post(url,JSON.stringify(datos),_options)
//        .subscribe(data => {
//          resolve(data['_body']);
//        });
//    });  
//  }

}
