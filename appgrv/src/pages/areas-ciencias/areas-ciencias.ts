import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";

@IonicPage()
@Component({
  selector: 'page-areas-ciencias',
  templateUrl: 'areas-ciencias.html',
})
export class AreasCienciasPage {
  public listaCursos: ISCursosAlumnos;

  constructor(
    public navCtrl:   NavController,
    public navParams: NavParams,
    public http:      HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreasCienciasPage');
    this.cargarCursosAreas();
  }

  cargarCursosAreas(){

        this.http.cargarCA(3).subscribe( res => {
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
