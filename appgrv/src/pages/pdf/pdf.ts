import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

/**
 * Generated class for the PdfPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pdf',
  templateUrl: 'pdf.html',
})
export class PdfPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private document: DocumentViewer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfPage');
  }

  onClick_MostrarPDF(){
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    this.document.viewDocument('assets/pdfs/Ficha_Inscripcion_INEI.pdf', 'application/pdf', options)
  }
}
