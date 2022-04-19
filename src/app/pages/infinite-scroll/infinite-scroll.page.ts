import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = Array(20);

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll; //hace una referencia a un elemento(selector) del html, se puede asociar por Tipo de elemento, o por nombre en el html se coloca con un #

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log(event);

    setTimeout(() => {
      if (this.data.length > 50) {
        this.infiniteScroll.complete()
        this.infiniteScroll.disabled = true; // al habilitarlo ya no se ejcutara el infinite Scroll
        return;
      }
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr) //... es un Spread Operator
      //event.target.complete(); // con este metodo se completa el spinner
      this.infiniteScroll.complete()
    }, 1000);
  }

}
