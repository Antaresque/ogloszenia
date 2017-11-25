import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeKategorieComponent } from './home-kategorie/home-kategorie.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [HomeComponent, HomeKategorieComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
