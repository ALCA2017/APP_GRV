import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";

@IonicPage()
@Component({
  selector: 'page-areas-educacion-artistica',
  templateUrl: 'areas-educacion-artistica.html',
})

export class AreasEducacionArtisticaPage {
  public listaCursos: ISCursosAlumnos;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http:      HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreasEducacionArtisticaPage');
    this.cargarCursosAreas();
  }

  cargarCursosAreas(){

    this.http.cargarCA(6).subscribe( res => {
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
