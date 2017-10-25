import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";

@IonicPage()
@Component({
  selector: 'page-areas-educacion-religiosa',
  templateUrl: 'areas-educacion-religiosa.html',
})

export class AreasEducacionReligiosaPage {
  public listaCursos: ISCursosAlumnos;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http:      HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreasEducacionReligiosaPage');
    this.cargarCursosAreas();
  }

  cargarCursosAreas(){

    this.http.cargarCA(8).subscribe( res => {
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
