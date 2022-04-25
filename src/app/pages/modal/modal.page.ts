import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async onClick() {
    const modal = await this.modalCtrl.create({ // devuelve una promesa por lo tanto se resuelve con async await, sirve para abrir un modal
      component: ModalInfoPage,
    });
    await modal.present();
  }
}
