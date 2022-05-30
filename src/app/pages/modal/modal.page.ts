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
      componentProps: { // envio de parametros al hijo
        nombre: 'Mauricio',
        pais: 'México'
      }
    });
    await modal.present(); // abre el modal
    // const { resp } = await modal.onDidDismiss(); //recibe los valores que devuelve el modal
    // const { data } = await modal.onDidDismiss(); //se usa desestructuraccion con el atributo data para trabajar directo con dara
    // console.log(data);
    // console.log('onDidDismiss'); // la informacion aparece cuando se cierra el modal de la animacion
    const { data } = await modal.onWillDismiss(); //se dispare antes de que empiece a hacerce la animacion del modal
    console.log(JSON.stringify(data)); //esto nos ayuda para poder visualizar los logs en android studio  
    console.log('onWillDismiss');
  }
}
