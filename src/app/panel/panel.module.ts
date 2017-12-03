import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';

// components
import { PanelComponent } from './panel.component';
import { ProfilComponent } from './profil/profil.component';
import { MojeogComponent } from './mojeog/mojeog.component';
import { ObserwowaneComponent } from './obserwowane/obserwowane.component';
import { StworzComponent } from './stworz/stworz.component';
import { ArchiwumComponent } from './archiwum/archiwum.component';
import { UstawieniaComponent } from './ustawienia/ustawienia.component';
import { WiadomosciComponent } from './wiadomosci/wiadomosci.component';
import { WiadomosciNewComponent } from './wiadomosci/wiadomosci-new/wiadomosci-new.component';
import { WiadomosciOdebraneComponent } from './wiadomosci/wiadomosci-odebrane/wiadomosci-odebrane.component';
import { WiadomosciWyslaneComponent } from './wiadomosci/wiadomosci-wyslane/wiadomosci-wyslane.component';
import { WiadomosciShowComponent } from './wiadomosci/wiadomosci-show/wiadomosci-show.component';

@NgModule({
  imports: [SharedModule],
  declarations: [PanelComponent, ProfilComponent, MojeogComponent, ObserwowaneComponent, StworzComponent, ArchiwumComponent, UstawieniaComponent, WiadomosciComponent, WiadomosciNewComponent, WiadomosciOdebraneComponent, WiadomosciWyslaneComponent, WiadomosciShowComponent]
})
export class PanelModule { }
