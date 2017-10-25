import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { MyApp } from './app.component';
import { PdfViewerPage } from './../pages/pdf-viewer/pdf-viewer';

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

import { HttpModule } from '@angular/http';
import { HttpProvider } from '../providers/http/http';
import { AuthService } from '../providers/auth-service/auth-service';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    PdfViewerComponent,
    PdfViewerPage,

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
    LoginPage,
    MyApp,
    PdfViewerPage,

    AreasCienciasPage,
    AreasComunicacionPage,
    AreasMatematicaPage,
    AreasSocialesPage,
    AreasEducacionArtisticaPage,
    AreasEducacionFisicaPage,
    AreasEducacionReligiosaPage,
    AreasIdiomasPage,
    AreasInformaticaPage,
    PdfPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    HttpProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
