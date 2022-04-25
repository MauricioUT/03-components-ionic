import { Component } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { MenuController, Platform } from '@ionic/angular';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Observable<Componente[]>;

  constructor( private menuCtrl: MenuController,
    private dataService: DataService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar) {
      this.initializeApp();
    }

    initializeApp() { // metodo para inicializar la aplicacion 
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.componentes = this.dataService.getMenuOpts();
      });
    }


}
