import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList; // hace referencia a un selector del html por medio del nombre del componente, o por id, si hubiera mas de un mismo componente

  usuarios: Observable<any>;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.usuarios = this.service.getUsuarios();// los servicios retornan un obsevable, por lo tanto hay que subscribirse o manejarlo en el html con el pipe (| async)
  }

  favorite(item) {
    console.log('click button favorite', item);
    this.ionList.closeSlidingItems(); // para  cerrar el sliding al darle click
  }
  share(item) {
    console.log('click button share', item);
    this.ionList.closeSlidingItems(); // para  cerrar el sliding al darle click
  }
  trash(item) {
    console.log('click button trash', item);
    this.ionList.closeSlidingItems(); // para  cerrar el sliding al darle click

  }
}