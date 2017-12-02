import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeKategorieComponent } from './home-kategorie/home-kategorie.component';
import { TimeAgoPipe } from '../_public/time-ago-pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [HomeComponent, HomeKategorieComponent, TimeAgoPipe],
  exports: [HomeComponent]
})
export class HomeModule { }
