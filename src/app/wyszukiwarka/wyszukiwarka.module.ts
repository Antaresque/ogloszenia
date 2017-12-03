import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';

// components
import { WyszukiwarkaComponent } from './wyszukiwarka.component';
import { KategorieTreeComponent } from './kategorie-tree/kategorie-tree.component';
import { FormWyszukiwrkaComponent } from './form-wyszukiwrka/form-wyszukiwrka.component';

@NgModule({
  imports: [SharedModule],
  declarations: [WyszukiwarkaComponent, KategorieTreeComponent, FormWyszukiwrkaComponent]
})
export class WyszukiwarkaModule { }
