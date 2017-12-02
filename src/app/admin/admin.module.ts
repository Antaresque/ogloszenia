import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminKategoriaComponent } from './adminkategoria/adminkategoria.component';
import { AdminuserComponent } from './adminuser/adminuser.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [AdminComponent, AdminKategoriaComponent, AdminuserComponent]
})
export class AdminModule { }
