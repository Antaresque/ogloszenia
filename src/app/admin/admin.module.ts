import { NgModule } from '@angular/core';
import { SharedModule } from './../_shared/shared.module';

// components
import { AdminComponent } from './admin.component';
import { AdminKategoriaComponent } from './adminkategoria/adminkategoria.component';
import { AdminuserComponent } from './adminuser/adminuser.component';

@NgModule({
  imports: [SharedModule],
  declarations: [AdminComponent, AdminKategoriaComponent, AdminuserComponent]
})
export class AdminModule { }
