import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { HttpProvider } from '../providers/http/http';
import { DocumentViewer } from "@ionic-native/document-viewer";
import { Camera } from '@ionic-native/camera';
import { AuthService } from '../providers/auth-service/auth-service';

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

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,

    AreasCienciasPage,
    AreasComunicacionPage,
    AreasMatematicaPage,
    AreasSocialesPage,
    AreasEducacionArtisticaPage,
    AreasEducacionFisicaPage,
    AreasEducacionReligiosaPage,
    AreasIdiomasPage,
    AreasInformaticaPage,
    PdfPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,

    AreasCienciasPage,
    AreasComunicacionPage,
    AreasMatematicaPage,
    AreasSocialesPage,
    AreasEducacionArtisticaPage,
    AreasEducacionFisicaPage,
    AreasEducacionReligiosaPage,
    AreasIdiomasPage,
    AreasInformaticaPage,
    PdfPage
  ],
  providers: [
    StatusBar,
    AuthService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    DocumentViewer,
    Camera
  ]
})
export class AppModule {}
