import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { OgloszenieComponent } from './ogloszenie/ogloszenie.component';
import { KategoriaComponent } from './kategoria/kategoria.component';
import { ObserwowaneComponent } from './panel/obserwowane/obserwowane.component';
import { ArchiwumComponent } from './panel/archiwum/archiwum.component';
import { MojeogComponent } from './panel/mojeog/mojeog.component';
import { OstatnioComponent } from './panel/ostatnio/ostatnio.component';
import { ProfilComponent } from './panel/profil/profil.component';
import { StworzComponent } from './panel/stworz/stworz.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './_core/authguard/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/login', component: AuthComponent, data: { subpage: 'login' }},
  { path: 'auth/register', component: AuthComponent, data: { subpage: 'register' }},
  { path: 'ogloszenie/:id', component: OgloszenieComponent },
  {
    path: 'kategoria/:id',
    component: KategoriaComponent,
  },
  {
    path: 'panel',
    component: PanelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'panel/archiwum',
    component: ArchiwumComponent,
  },
  {
    path: 'panel/mojeog',
    component: MojeogComponent,
  },
  {
    path: 'panel/obserwowane',
    component: ObserwowaneComponent,
  },
  {
    path: 'panel/ostatnio',
    component: OstatnioComponent,
  },
  {
    path: 'panel/profil',
    component: ProfilComponent,
  },
  {
    path: 'panel/stworz',
    component: StworzComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
