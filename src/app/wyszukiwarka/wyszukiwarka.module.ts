import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WyszukiwarkaComponent } from './wyszukiwarka.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [WyszukiwarkaComponent]
})
export class WyszukiwarkaModule { }
