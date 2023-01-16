import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './components/accueil/accueil.component';
import { AuthentrepriseGuard } from './helpers/authentreprise.guard';
import { ContratComponent } from './components/contrat/contrat.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSalarieComponent } from './components/header-salarie/header-salarie.component';
import { LoginComponent } from './components/login/login.component';
import { LoginSalarieComponent } from './components/login-salarie/login-salarie.component';
import { MesContratsComponent } from './components/mes-contrats/mes-contrats.component';
import { MesSalariesComponent } from './components/mes-salaries/mes-salaries.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileSalarieComponent } from './components/profile-salarie/profile-salarie.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterSalarieComponent } from './components/register-salarie/register-salarie.component';

const routes: Routes = [
  {
    path: '', component:AccueilComponent, title:'Accueil'

  },
  {
    path: 'entreprise/login',component:LoginComponent,title:'Login Entreprise'
    // children:[
    //   {path:'login,component:LoginComponent'}
    // ]
  },
  {
    path: 'salarie/login',component:LoginSalarieComponent,title:'Login Salarié'
    //  children:[
    //   {path:'login,component:LoginSalarieComponent'}
    //  ]
  },
  {
    path: 'overview_s',component:HeaderSalarieComponent,
    children:[
      { path: 'profil', component: ProfileSalarieComponent,title:'Profil Salarié'
    // ,canActivate: [AuthentrepriseGuard]
   },
   { path: 'contrat', component: ProfileSalarieComponent, title:'Contrat Salarié'
   // ,canActivate: [AuthentrepriseGuard]
  }

    ]
  },
  {
    path: 'entreprise/register',component:RegisterComponent, title:'Inscription Entreprise'
  },
  {
    path: 'salarie/register',component:RegisterSalarieComponent, title:'Inscription Salarié'
  },
  {
    path: 'overview',component:HeaderComponent,
    children:[
      { path: 'profil', component: ProfileComponent
       ,canActivate: [AuthentrepriseGuard]
     },
      { path: 'addcontrat', component: ContratComponent,title:'Créer un contrat'
 // ,canActivate: [AuthentrepriseGuard]
    },
      {path:'salaries',component:MesSalariesComponent,title:'Mes salariés'
      ,canActivate: [AuthentrepriseGuard]
    },
      {path:'contrats',component:MesContratsComponent,title:'Mes contrats'
      ,canActivate: [AuthentrepriseGuard]
    }

    ]
  }
  // {
  //   path: 'overview_s',component:HeaderComponent,
  //   children:[
  //     { path: 'profil', component: ProfileSalarieComponent },

  //   ]
  // }
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
