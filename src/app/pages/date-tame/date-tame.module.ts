import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateTamePageRoutingModule } from './date-tame-routing.module';

import { DateTamePage } from './date-tame.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateTamePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DateTamePage]
})
export class DateTamePageModule {}
