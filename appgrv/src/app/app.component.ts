import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from "../pages/login/login";

import { AreasCienciasPage } from "../pages/areas-ciencias/areas-ciencias";
import { AreasComunicacionPage } from "../pages/areas-comunicacion/areas-comunicacion";
import { AreasMatematicaPage } from "../pages/areas-matematica/areas-matematica";
import { AreasSocialesPage } from "../pages/areas-sociales/areas-sociales";
import { AreasEducacionArtisticaPage } from "../pages/areas-educacion-artistica/areas-educacion-artistica";
import { AreasEducacionFisicaPage } from "../pages/areas-educacion-fisica/areas-educacion-fisica";
import { AreasEducacionReligiosaPage } from "../pages/areas-educacion-religiosa/areas-educacion-religiosa";
import { AreasIdiomasPage } from "../pages/areas-idiomas/areas-idiomas";
import { AreasInformaticaPage } from "../pages/areas-informatica/areas-informatica";
import { PdfPage } from '../pages/pdf/pdf';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage: any;
  public pages: Array<{
    titulo: string,
    component: any,
    icon: string,
    idArea: number}>;

  constructor(
    platform:     Platform,
    statusBar:    StatusBar,
    splashScreen: SplashScreen
  ) {

    this.rootPage = LoginPage;
    this.pages = [
      { titulo: 'Ciencias',             component: AreasCienciasPage, icon: 'flask', idArea: 3},
      { titulo: 'Sociales',             component: AreasSocialesPage, icon: 'person', idArea: 4},
      { titulo: 'Comunicación',         component: AreasComunicacionPage, icon: 'book', idArea: 2},
      { titulo: 'Matemáticas',          component: AreasMatematicaPage, icon: 'calculator', idArea: 1},
      { titulo: 'Idiomas',              component: AreasIdiomasPage, icon: 'plane', idArea: 9},
      { titulo: 'Informatica',          component: AreasInformaticaPage, icon: 'laptop', idArea: 5},
      { titulo: 'Educación Artística',  component: AreasEducacionArtisticaPage, icon: 'brush', idArea: 6},
      { titulo: 'Educación Física',     component: AreasEducacionFisicaPage, icon: 'body', idArea: 7},
      { titulo: 'Educación Religiosa',  component: AreasEducacionReligiosaPage, icon: 'contract', idArea: 8},
      { titulo: 'Mostrar PDF',          component: PdfPage, icon: 'mail', idArea: 11}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }

}
