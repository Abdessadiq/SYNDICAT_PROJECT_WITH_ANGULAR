import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { RootNavComponent } from './components/root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { GestionUtilisateurComponent } from './components/gestion-utilisateur/gestion-utilisateur.component';
import { GestionCaisseComponent } from './components/gestion-caisse/gestion-caisse.component';
import { GestionImmeubleComponent } from './components/gestion-immeuble/gestion-immeuble.component';
import { GestionAppartementComponent } from './components/gestion-appartement/gestion-appartement.component';
import { GestionAnnonceComponent } from './components/gestion-annonce/gestion-annonce.component';
import { GestionReglementComponent } from './components/gestion-reglement/gestion-reglement.component';
import { GlobalService } from 'src/services/global.service';
import { NewImmeubleComponent } from './components/mise-a-jour/new-immeuble/new-immeuble.component';
import { NewUtilisateurComponent } from './components/mise-a-jour/new-utilisateur/new-utilisateur.component';
import { NewAppartementComponent } from './components/mise-a-jour/new-appartement/new-appartement.component';
import { NewAnnonceComponent } from './components/mise-a-jour/new-annonce/new-annonce.component';
import { NewReglementComponent } from './components/mise-a-jour/new-reglement/new-reglement.component';
import { NewCaisseComponent } from './components/mise-a-jour/new-caisse/new-caisse.component';
import { EditImmeubleComponent } from './components/mise-a-jour/edit-immeuble/edit-immeuble.component';
import { EditAnnonceComponent } from './components/mise-a-jour/edit-annonce/edit-annonce.component';
import { EditAppartementComponent } from './components/mise-a-jour/edit-appartement/edit-appartement.component';
import { EditCaisseComponent } from './components/mise-a-jour/edit-caisse/edit-caisse.component';
import { EditReglementComponent } from './components/mise-a-jour/edit-reglement/edit-reglement.component';
import { EditUtilisateurComponent } from './components/mise-a-jour/edit-utilisateur/edit-utilisateur.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    RootNavComponent,
    GestionUtilisateurComponent,
    GestionCaisseComponent,
    GestionImmeubleComponent,
    GestionAppartementComponent,
    GestionAnnonceComponent,
    GestionReglementComponent,
    NewImmeubleComponent,
    NewUtilisateurComponent,
    NewAppartementComponent,
    NewAnnonceComponent,
    NewReglementComponent,
    NewCaisseComponent,
    EditImmeubleComponent,
    EditAnnonceComponent,
    EditAppartementComponent,
    EditCaisseComponent,
    EditReglementComponent,
    EditUtilisateurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [MatInputModule],
  providers: [GlobalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
