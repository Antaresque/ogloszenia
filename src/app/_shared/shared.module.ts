import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGalleryModule } from 'ngx-gallery';

import { TimeAgoPipe } from './time-ago-pipe';
import { TruncatePipe } from './truncate-pipe';
import { FormWyszukiwrkaComponent } from './form-wyszukiwrka/form-wyszukiwrka.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxGalleryModule
  ],
  declarations: [TimeAgoPipe, TruncatePipe, FormWyszukiwrkaComponent],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    TimeAgoPipe,
    TruncatePipe,
    FormWyszukiwrkaComponent]
})
export class SharedModule { }
