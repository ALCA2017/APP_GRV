import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";

@IonicPage()
@Component({
  selector: 'page-areas-informatica',
  templateUrl: 'areas-informatica.html',
})

export class AreasInformaticaPage {
  public listaCursos: ISCursosAlumnos;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http:      HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreasInformaticaPage');
    this.cargarCursosAreas();
  }

  cargarCursosAreas(){

    this.http.cargarCA(5).subscribe( res => {
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
