import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";

@IonicPage()
@Component({
  selector: 'page-areas-comunicacion',
  templateUrl: 'areas-comunicacion.html'
})

export class AreasComunicacionPage {
    public listaCursos: ISCursosAlumnos;

  constructor(
    public navCtrl:   NavController,
    public navParams: NavParams,
    public http:      HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreasComunicacionPage');
    this.cargarCursosAreas();
  }

  cargarCursosAreas(){

    this.http.cargarCA(2).subscribe( res => {
          this.listaCursos = res.listaCursosAreas;
        },
        error =>{
          console.log(error);
        });
  }

  showHome(){
    this.navCtrl.setRoot("HomePage")
  }

}
