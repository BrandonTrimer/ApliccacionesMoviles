import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Libros2Page } from './libros2.page';

const routes: Routes = [
  {
    path: '',
    component: Libros2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Libros2PageRoutingModule {}
