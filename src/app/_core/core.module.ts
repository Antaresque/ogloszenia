import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// services
import { UserService } from './user/user.service';
import { OgloszeniaService } from './ogloszenia/ogloszenia.service';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './authguard/auth.guard';


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
        providers: [UserService, OgloszeniaService, AuthGuard, HttpModule]
    };
  }
}
