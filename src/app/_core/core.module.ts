import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// auth
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

// services
import { UserService } from './user/user.service';
import { OgloszeniaService } from './ogloszenia/ogloszenia.service';
import { KategorieService } from './kategorie/kategorie.service';
import { WiadomosciService } from './wiadomosci/wiadomosci.service';

// guards
import { AuthGuard } from './authguard/auth.guard';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({globalHeaders: [{'Content-Type':'application/json'}],}), http, options);
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: CoreModule,
        providers: [UserService, OgloszeniaService, KategorieService, WiadomosciService, AuthGuard, HttpModule,
          {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http, RequestOptions]}]
    };
  }
}
