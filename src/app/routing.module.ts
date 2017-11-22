import { MojeogComponent } from './panel/mojeog/mojeog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { ProfilComponent } from './profil/profil.component';
import { OgloszenieComponent } from './ogloszenie/ogloszenie.component';
import { KategoriaComponent } from './kategoria/kategoria.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/login', component: AuthComponent, data: { subpage: 'login' }},
  { path: 'auth/register', component: AuthComponent, data: { subpage: 'register' }},
  { path: 'profil', component: ProfilComponent },
  { path: 'ogloszenie/:id', component: OgloszenieComponent },
  {
    path: 'kategoria/:id',
    component: KategoriaComponent,
  },
  {
    path: 'panel',
    component: PanelComponent,
  },
  {
    path: 'panel/mojeog',
    component: MojeogComponent,
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
