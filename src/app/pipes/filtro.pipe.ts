import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string = '', columna: string): any[] {
    console.log(arreglo);
    console.log(texto);
    if (texto.trim() === '')
      return arreglo;

    if (!arreglo) // si el arreglo es nulo o vacio se retorna
      return arreglo;

    texto = texto.toLocaleLowerCase();
    
    return arreglo.filter(
      item => item[columna].toLowerCase().includes(texto)
    );
  }

}
