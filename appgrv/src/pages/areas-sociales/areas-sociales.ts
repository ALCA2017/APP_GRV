import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";

@IonicPage()
@Component({
  selector: 'page-areas-sociales',
  templateUrl: 'areas-sociales.html',
})

export class AreasSocialesPage {
    public listaCursos: ISCursosAlumnos;

  constructor(
    public navCtrl:   NavController,
    public navParams: NavParams,
    public http:      HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreasSocialesPage');
    this.cargarCursosAreas();
  }

  cargarCursosAreas(){
    this.http.cargarCA(4).subscribe( res => {
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
