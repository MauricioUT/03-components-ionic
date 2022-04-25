import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  items = Array(10);

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() { }

  onClick(val: number) {
    console.log(val);
    this.popoverCtrl.dismiss({ // metodo para cerrar un pop over
      item: val   // se puede enviar cualquier valor del hijo al padre
    });
  }

}
