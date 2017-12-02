import { NgModule } from '@angular/core';
import { SharedModule } from './../_shared/shared.module';

// components
import { HomeComponent } from './home.component';
import { HomeKategorieComponent } from './home-kategorie/home-kategorie.component';

@NgModule({
  imports: [SharedModule],
  declarations: [HomeComponent, HomeKategorieComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
