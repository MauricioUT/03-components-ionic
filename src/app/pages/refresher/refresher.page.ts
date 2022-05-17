import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }


  doRefresh(event) {
    console.log(event);
    setTimeout(() => {
      this.items = Array(20);
      event.target.complete();//nos ayudara a parar el refresco de la pagina
    }, 1000);
  }
}
