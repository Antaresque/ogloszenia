import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NaglowekComponent } from './components/naglowek/naglowek.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NaglowekComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
