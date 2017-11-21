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
  { path: 'login', component: AuthComponent},
  { path: 'register', component: AuthComponent},
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
