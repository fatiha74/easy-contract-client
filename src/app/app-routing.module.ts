import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './components/accueil/accueil.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

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
    path: 'entreprise/register',component:RegisterComponent
  },
  {
    path: 'overview',component:HeaderComponent,
    children:[
      { path: 'profil', component: ProfileComponent },

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
