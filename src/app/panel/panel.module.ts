import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { ProfilComponent } from './profil/profil.component';
import { MojeogComponent } from './mojeog/mojeog.component';
import { ObserwowaneComponent } from './obserwowane/obserwowane.component';
import { StworzComponent } from './stworz/stworz.component';
import { ArchiwumComponent } from './archiwum/archiwum.component';
import { OstatnioComponent } from './ostatnio/ostatnio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PanelComponent, ProfilComponent, MojeogComponent, ObserwowaneComponent, StworzComponent, ArchiwumComponent, OstatnioComponent]
})
export class PanelModule { }
