import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

/* interface Componente {
  icon: string,
  name: string,
  redirectTo: string
} */

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

/*   componentes: Componente[] = [
    { icon: 'american-football', name: 'Action Sheet', redirectTo: '/action-sheet' },
    { icon: 'alert-circle-outline', name: 'Alert', redirectTo: '/alert' },
    { icon: 'beaker-outline', name: 'Avatar', redirectTo: '/avatar' },
    { icon: 'radio-button-off-outline', name: 'Botones', redirectTo: '/botones' },
    { icon: 'card-outline', name: 'Card', redirectTo: '/card' },
    { icon: 'checkmark-circle-outline', name: 'Checks', redirectTo: '/check' },
    { icon: 'calendar-outline', name: 'Date Tame', redirectTo: '/date-tame' },
    { icon: 'car-outline', name: 'Fab', redirectTo: '/fab' },
    { icon: 'grid-outline', name: 'Grid', redirectTo: '/grid' },
    { icon: 'infinite-outline', name: 'Infinite Scroll', redirectTo: '/infinite-scroll' },
    { icon: 'hammer-outline', name: 'Input', redirectTo: '/input' },
    { icon: 'list-outline', name: 'List - Sliding', redirectTo: '/list' },
    { icon: 'reorder-three-outline', name: 'List - Reorder', redirectTo: '/list-reorder' },
    { icon: 'refresh-circle-outline', name: 'Loading', redirectTo: '/loading' }
  ]; */
  componentes : Observable<Componente[]>;

  constructor(private menuCtrl: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }


  mostrartMenu() {
    this.menuCtrl.open('first'); // si solo existe un menu se le puede mandar sin argumentos ya que toma el menu que este por defecto, si no se manda el menuId
  }
}
