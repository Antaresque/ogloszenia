import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';

// components
import { OgloszenieComponent } from './ogloszenie.component';

@NgModule({
  imports: [SharedModule],
  declarations: [OgloszenieComponent],
  exports: [OgloszenieComponent]
})
export class OgloszenieModule { }
