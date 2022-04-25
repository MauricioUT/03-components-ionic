import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev?: any) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent, // componente a mostrar, lo carga mediante lazyLoad, no se necesita importar el modulo del componente, lo crea de manera dinamica
      //cssClass: 'my-custom-class',  no existe clase para mostrar el pop over
      event: ev, // si no se le manda un evento lo mandara por defecto en el centro, si se le manda sabra las coordenadas de donde se le llamo 
      translucent: true,
      backdropDismiss: false // se obliga a seleccionar una opcion dentro del pop over 
    });
    await popover.present();
  
   // const { role } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();// este metodo trabaja mas rapido que el anterior

    console.log('onDidDismiss resolved with role', data);
  }
}
