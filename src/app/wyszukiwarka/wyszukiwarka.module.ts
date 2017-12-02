import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';

// components
import { WyszukiwarkaComponent } from './wyszukiwarka.component';

@NgModule({
  imports: [SharedModule],
  declarations: [WyszukiwarkaComponent]
})
export class WyszukiwarkaModule { }
