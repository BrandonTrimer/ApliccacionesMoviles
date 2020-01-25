import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Libros2PageRoutingModule } from './libros2-routing.module';

import { Libros2Page } from './libros2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Libros2PageRoutingModule
  ],
  declarations: [Libros2Page]
})
export class Libros2PageModule {}
