import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
  import { RegisterComponent } from './auth/register/register.component';
  import { LoginComponent } from './auth/login/login.component';
  import { VerifyComponent } from './auth/verify/verify.component';
import { OgloszenieComponent } from './ogloszenie/ogloszenie.component';
import { UzytkownikComponent } from './uzytkownik/uzytkownik.component';
import { WyszukiwarkaComponent } from './wyszukiwarka/wyszukiwarka.component';
import { PanelComponent } from './panel/panel.component';
  import { ArchiwumComponent } from './panel/archiwum/archiwum.component';
  import { MojeogComponent } from './panel/mojeog/mojeog.component';
  import { StworzComponent } from './panel/stworz/stworz.component';
  import { ObserwowaneComponent } from './panel/obserwowane/obserwowane.component';
  import { ProfilComponent } from './panel/profil/profil.component';
  import { UstawieniaComponent } from './panel/ustawienia/ustawienia.component';
  import { WiadomosciComponent } from './panel/wiadomosci/wiadomosci.component';
    import { WiadomosciShowComponent } from './panel/wiadomosci/wiadomosci-show/wiadomosci-show.component';
    import { WiadomosciNewComponent } from './panel/wiadomosci/wiadomosci-new/wiadomosci-new.component';
    import { WiadomosciWyslaneComponent } from './panel/wiadomosci/wiadomosci-wyslane/wiadomosci-wyslane.component';
    import { WiadomosciOdebraneComponent } from './panel/wiadomosci/wiadomosci-odebrane/wiadomosci-odebrane.component';
import { PageNotFoundComponent } from './_public/pagenotfound/pagenotfound.component';

import { AuthGuard } from './_core/authguard/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent, children: [
    { path: '', redirectTo: 'login',  pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'verify', component: VerifyComponent }
  ]},
  { path: 'ogloszenie/:id', component: OgloszenieComponent },
  { path: 'wyszukiwarka', component: WyszukiwarkaComponent },
  { path: 'uzytkownik/:id', component: UzytkownikComponent },
  { path: 'panel', component: PanelComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'profil',  pathMatch: 'full' },
    { path: 'profil', component: ProfilComponent },
    { path: 'archiwum', component: ArchiwumComponent },
    { path: 'mojeog', component: MojeogComponent },
    { path: 'stworz', component: StworzComponent },
    { path: 'obserwowane', component: ObserwowaneComponent },
    { path: 'ustawienia', component: UstawieniaComponent },
    { path: 'wiadomosci', component: WiadomosciComponent, children: [
      { path: '', redirectTo: 'odebrane', pathMatch: 'full' },
      { path: 'odebrane', component: WiadomosciOdebraneComponent },
      { path: 'wyslane', component: WiadomosciWyslaneComponent },
      { path: 'new', component: WiadomosciNewComponent },
      { path: 'show/:id', component: WiadomosciShowComponent }
    ]}
  ]},
  { path: '**', component: PageNotFoundComponent } // 404
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
