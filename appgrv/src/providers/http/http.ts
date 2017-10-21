import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpProvider {

  idUser : number = 6;
  datos : any;
  path : string = 'http://localhost:8455/alumnos/cursos?idUsuario=' + this.idUser + '&idArea=';
  path2 : string = 'https://randomuser.me/api/?results=' + this.idUser;

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  cargarCA(_idArea){
    return this.http.get(this.path + _idArea)
    .map(res => res.json(),
      err => {
        console.log(err);
      }
    )
  }
}
