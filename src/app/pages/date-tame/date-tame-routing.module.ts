import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateTamePage } from './date-tame.page';

const routes: Routes = [
  {
    path: '',
    component: DateTamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateTamePageRoutingModule {}
