import { Component } from '@angular/core';
import { Modal, ModalController, NavController } from 'ionic-angular';
import { PdfViewerPage } from './../pdf-viewer/pdf-viewer';

@Component({
  selector: 'page-pdf',
  templateUrl: 'pdf.html'
})
export class PdfPage {

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController
  ) { }

  onOpenPDF(): void {
    let modal: Modal = this.modalCtrl.create(PdfViewerPage, {
      displayData: {
        pdfSource: {
          url: 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf'
        }
      }
    });
    modal.present();
  }

  showHome(){
    this.navCtrl.setRoot("HomePage")
  }

}
