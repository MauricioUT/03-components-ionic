import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre: string; // sirve para obtener parametros enviados desde el padre
  
  @Input() pais: string;

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgs(){
    this.modalCtrl.dismiss(); // cierra el modal invocado 
  }

  salirConArgs(){
    this.modalCtrl.dismiss({// cierra el modal invocado, con argumentos
      nombre: 'Daniel',
      pais: 'Mexico'
    }); 
  }

}
