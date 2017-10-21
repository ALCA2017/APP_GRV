import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public navCtrl: NavController,
    private document: DocumentViewer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  onClick_MostrarPDF(){
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    this.document.viewDocument('assets/pdfs/Ficha_Inscripcion_INEI.pdf', 'application/pdf', options)
  }

}
