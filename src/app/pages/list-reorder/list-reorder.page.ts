import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Luffy', 'Zoro', 'Sanji', 'Jimbe', 'Brook'];
  reorder: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any) { // nod da informacion como en donde se encontraba y cual es su nueva posicion 
    console.log(event);
    const itemMov = this.personajes.splice(event.detail.from, 1)[0]; // corta elementos de la posicion inicial para actualizar el arreglo, devuelve un arreglo de los items requeridos en este caso  1
    this.personajes.splice(event.detail.to, 0, itemMov); // se inseta el arreglo para mover de lugar
    event.detail.complete();// se le indica que ya se termino de mover el elemento 
    console.log(this.personajes);
  }

  onReorder() {
    this.reorder = !this.reorder;
  }
}
