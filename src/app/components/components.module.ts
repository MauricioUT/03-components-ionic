import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { IonicModule } from '@ionic/angular';
import { PopoverInfoComponent } from './popover-info/popover-info.component';


@NgModule({
  declarations: [
    HeadersComponent, 
    PopoverInfoComponent, // se importa para que este componente pueda conocer con que otros modulos trabaja 
  ],
  exports: [
    HeadersComponent,
    PopoverInfoComponent// se exporta para que cuando se importe el modulo conozcan que componentes contiene
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
