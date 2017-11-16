import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KategoriaComponent } from './kategoria.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KategoriaComponent],
  exports: [KategoriaComponent]
})
export class KategoriaModule { }
