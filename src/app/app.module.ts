import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//app-root
import { AppComponent } from './app.component';

//feature modules
import { CoreModule } from './_core/core.module';
import { HttpModule } from '@angular/http';
//routing module

import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule.forRoot()
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
