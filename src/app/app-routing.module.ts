import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './components/accueil/accueil.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';

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
