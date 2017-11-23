import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl);

// app-root
import { AppComponent } from './app.component';

// services
import { CoreModule } from './_core/core.module';

// feature modules
import { PublicModule } from './_public/public.module';
import { HomeModule } from './home/home.module';
import { OgloszenieModule } from './ogloszenie/ogloszenie.module';
import { KategoriaModule } from './kategoria/kategoria.module';
import { PanelModule } from './panel/panel.module';
import { AuthModule } from './auth/auth.module';
import { UzytkownikModule } from './uzytkownik/uzytkownik.module';

// routing module
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule.forRoot(),
    PublicModule,
    HomeModule,
    OgloszenieModule,
    KategoriaModule,
    RoutingModule,
    PanelModule,
    AuthModule,
    UzytkownikModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pl'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
