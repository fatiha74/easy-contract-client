import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AccueilComponent } from './components/accueil/accueil.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSalarieComponent } from './components/header-salarie/header-salarie.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LoginSalarieComponent } from './components/login-salarie/login-salarie.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileSalarieComponent } from './components/profile-salarie/profile-salarie.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterSalarieComponent } from './components/register-salarie/register-salarie.component';
import { TokenInterceptorProvider } from './helpers/token.interceptor';
import { UpdateEntrepriseComponent } from './modals/update-entreprise/update-entreprise.component';
import { UpdateSalarieComponent } from './modals/update-salarie/update-salarie.component';
import { ContratComponent } from './components/contrat/contrat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccueilComponent,
    HeaderComponent,
    ProfileComponent,
    UpdateEntrepriseComponent,
    LoginSalarieComponent,
    HeaderSalarieComponent,
    ProfileSalarieComponent,
    UpdateSalarieComponent,
    RegisterSalarieComponent,
    ContratComponent,


  ],
  imports: [
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
