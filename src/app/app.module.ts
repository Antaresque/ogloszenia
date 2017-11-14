import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//app-root
import { AppComponent } from './app.component';

//feature modules
import { CoreModule } from './_core/core.module';
//routing module

import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
