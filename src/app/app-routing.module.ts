import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './components/accueil/accueil.component';
import { ContratComponent } from './components/contrat/contrat.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSalarieComponent } from './components/header-salarie/header-salarie.component';
import { LoginComponent } from './components/login/login.component';
import { LoginSalarieComponent } from './components/login-salarie/login-salarie.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileSalarieComponent } from './components/profile-salarie/profile-salarie.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterSalarieComponent } from './components/register-salarie/register-salarie.component';

const routes: Routes = [
  {
    path: '', component:AccueilComponent

  },
  {
    path: 'entreprise/login',component:LoginComponent
    // children:[
    //   {path:'login,component:LoginComponent'}
    // ]
  },
  {
    path: 'salarie/login',component:LoginSalarieComponent
    //  children:[
    //   {path:'login,component:LoginSalarieComponent'}
    //  ]
  },
  {
    path: 'overview_s',component:HeaderSalarieComponent,
    children:[
      { path: 'profil', component: ProfileSalarieComponent }

    ]
  },
  {
    path: 'entreprise/register',component:RegisterComponent
  },
  {
    path: 'salarie/register',component:RegisterSalarieComponent
  },
  {
    path: 'overview',component:HeaderComponent,
    children:[
      { path: 'profil', component: ProfileComponent },
      { path: 'addcontrat', component: ContratComponent }

    ]
  },
  {
    path: 'overview_s',component:HeaderComponent,
    children:[
      { path: 'profil', component: ProfileSalarieComponent },

    ]
  }
  // {
  //   path: 'salarie',component:LoginComponent
  //   // children:[
  //   //   {path:'login,component:LoginComponent'}
  //   // ]

  // },
  // {
  //   path: 'login',component:LoginComponent

  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
