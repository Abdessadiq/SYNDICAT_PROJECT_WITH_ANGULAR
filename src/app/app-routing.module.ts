import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GestionAnnonceComponent } from './components/gestion-annonce/gestion-annonce.component';
import { GestionAppartementComponent } from './components/gestion-appartement/gestion-appartement.component';
import { GestionCaisseComponent } from './components/gestion-caisse/gestion-caisse.component';
import { GestionImmeubleComponent } from './components/gestion-immeuble/gestion-immeuble.component';
import { GestionReglementComponent } from './components/gestion-reglement/gestion-reglement.component';
import { GestionUtilisateurComponent } from './components/gestion-utilisateur/gestion-utilisateur.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditAnnonceComponent } from './components/mise-a-jour/edit-annonce/edit-annonce.component';
import { EditAppartementComponent } from './components/mise-a-jour/edit-appartement/edit-appartement.component';
import { EditCaisseComponent } from './components/mise-a-jour/edit-caisse/edit-caisse.component';
import { EditImmeubleComponent } from './components/mise-a-jour/edit-immeuble/edit-immeuble.component';
import { EditReglementComponent } from './components/mise-a-jour/edit-reglement/edit-reglement.component';
import { EditUtilisateurComponent } from './components/mise-a-jour/edit-utilisateur/edit-utilisateur.component';
import { NewAnnonceComponent } from './components/mise-a-jour/new-annonce/new-annonce.component';
import { NewAppartementComponent } from './components/mise-a-jour/new-appartement/new-appartement.component';
import { NewCaisseComponent } from './components/mise-a-jour/new-caisse/new-caisse.component';
import { NewImmeubleComponent } from './components/mise-a-jour/new-immeuble/new-immeuble.component';
import { NewReglementComponent } from './components/mise-a-jour/new-reglement/new-reglement.component';
import { NewUtilisateurComponent } from './components/mise-a-jour/new-utilisateur/new-utilisateur.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  {
    path: 'dashboard/g-utilisateur',
    component: GestionUtilisateurComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard/g-caisse',
    component: GestionCaisseComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard/g-immeuble',
    component: GestionImmeubleComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard/g-appartement',
    component: GestionAppartementComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard/g-annonce',
    component: GestionAnnonceComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard/g-reglement',
    component: GestionReglementComponent,
    pathMatch: 'full',
  },

  {
    path: 'ajouterImmeuble',
    component: NewImmeubleComponent,
    pathMatch: 'full',
  },
  {
    path: 'editImmeuble/:id',
    component: EditImmeubleComponent,
  },
  {
    path: 'ajouterAppartement',
    component: NewAppartementComponent,
    pathMatch: 'full',
  },
  {
    path: 'editAppartement/:id',
    component: EditAppartementComponent,
  },
  {
    path: 'ajouterUtilisateur',
    component: NewUtilisateurComponent,
    pathMatch: 'full',
  },
  {
    path: 'editUtilisateur/:id',
    component: EditUtilisateurComponent,
  },
  {
    path: 'ajouterCaisse',
    component: NewCaisseComponent,
    pathMatch: 'full',
  },
  {
    path: 'editCaisse/:id',
    component: EditCaisseComponent,
  },

  {
    path: 'ajouterReglement',
    component: NewReglementComponent,
    pathMatch: 'full',
  },
  {
    path: 'editReglement/:id',
    component: EditReglementComponent,
  },
  {
    path: 'ajouterAnnonce',
    component: NewAnnonceComponent,
    pathMatch: 'full',
  },
  {
    path: 'editAnnonce/:id',
    component: EditAnnonceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
