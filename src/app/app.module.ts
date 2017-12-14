import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl);

// app-root
import { AppComponent } from './app.component';

// services
import { CoreModule } from './_core/core.module';

// angular modules
import { HttpModule } from '@angular/http';

// feature modules
import { PublicModule } from './_public/public.module';
import { HomeModule } from './home/home.module';
import { OgloszenieModule } from './ogloszenie/ogloszenie.module';
import { PanelModule } from './panel/panel.module';
import { AuthModule } from './auth/auth.module';
import { UzytkownikModule } from './uzytkownik/uzytkownik.module';
import { WyszukiwarkaModule } from './wyszukiwarka/wyszukiwarka.module';

// routing module
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule.forRoot(),
    PublicModule,
    HomeModule,
    OgloszenieModule,
    RoutingModule,
    PanelModule,
    AuthModule,
    UzytkownikModule,
    WyszukiwarkaModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pl'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
