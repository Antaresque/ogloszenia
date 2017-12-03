import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';

// components
import { WyszukiwarkaComponent } from './wyszukiwarka.component';
import { KategorieTreeComponent } from './kategorie-tree/kategorie-tree.component';
import { AtrybutyComponent } from './atrybuty/atrybuty.component';

@NgModule({
  imports: [SharedModule],
  declarations: [WyszukiwarkaComponent, KategorieTreeComponent, AtrybutyComponent]
})
export class WyszukiwarkaModule { }
