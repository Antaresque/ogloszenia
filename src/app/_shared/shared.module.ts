import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGalleryModule } from 'ngx-gallery';

import { TimeAgoPipe } from './time-ago-pipe';
import { TruncatePipe } from './truncate-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxGalleryModule
  ],
  declarations: [TimeAgoPipe, TruncatePipe],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    TimeAgoPipe,
    TruncatePipe]
})
export class SharedModule { }
