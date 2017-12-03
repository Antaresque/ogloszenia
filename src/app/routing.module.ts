import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
  import { RegisterComponent } from './auth/register/register.component';
  import { LoginComponent } from './auth/login/login.component';
import { OgloszenieComponent } from './ogloszenie/ogloszenie.component';
import { UzytkownikComponent } from './uzytkownik/uzytkownik.component';
import { WyszukiwarkaComponent } from './wyszukiwarka/wyszukiwarka.component';
import { PanelComponent } from './panel/panel.component';
  import { ArchiwumComponent } from './panel/archiwum/archiwum.component';
  import { MojeogComponent } from './panel/mojeog/mojeog.component';
  import { OstatnioComponent } from './panel/ostatnio/ostatnio.component';
  import { StworzComponent } from './panel/stworz/stworz.component';
  import { ObserwowaneComponent } from './panel/obserwowane/obserwowane.component';
  import { ProfilComponent } from './panel/profil/profil.component';
  import { UstawieniaComponent } from './panel/ustawienia/ustawienia.component';
import { AdminComponent } from './admin/admin.component';
  import { AdminKategoriaComponent } from './admin/adminkategoria/adminkategoria.component';
import { PageNotFoundComponent } from './_public/pagenotfound/pagenotfound.component';

import { AuthGuard } from './_core/authguard/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent, children: [
    { path: '', redirectTo: 'login',  pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ]},
  { path: 'ogloszenie/:id', component: OgloszenieComponent },
  { path: 'wyszukiwarka', component: WyszukiwarkaComponent },
  { path: 'uzytkownik/:id', component: UzytkownikComponent },
  { path: 'panel', component: PanelComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'profil',  pathMatch: 'full' },
    { path: 'profil', component: ProfilComponent },
    { path: 'archiwum', component: ArchiwumComponent },
    { path: 'mojeog', component: MojeogComponent },
    { path: 'ostatnio', component: OstatnioComponent },
    { path: 'stworz', component: StworzComponent },
    { path: 'obserwowane', component: ObserwowaneComponent },
    { path: 'ustawienia', component: UstawieniaComponent }
  ]},
  { path: 'admin', component: AdminComponent, children: [
    { path: 'kategoria', component: AdminKategoriaComponent }
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
