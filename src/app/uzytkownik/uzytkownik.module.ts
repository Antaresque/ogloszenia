import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';

//components
import { UzytkownikComponent } from './uzytkownik.component';

@NgModule({
  imports: [SharedModule],
  declarations: [UzytkownikComponent]
})
export class UzytkownikModule { }
