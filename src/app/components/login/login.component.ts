import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';
import { Entreprise } from 'src/app/models/entreprise';
import { Router } from '@angular/router';
import { Salarie } from 'src/app/models/salarie';
import { TokenInterceptor } from './../../helpers/token.interceptor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //on instancie la class User
  // salarie = new Salarie()
  entreprise = new Entreprise()

  // stock token
  tkn!: any

isLogin=false;

  loginForm!: FormGroup
  // registerForm!:FormGroup

  constructor(
    private _fb: FormBuilder,
    private _route: Router,
    private _dataService: DataService
    ) { }


  ngOnInit(): void {
    console.warn('ok')
    this.loginForm = this._fb.group({
      // id:[this.getRandomInit()],
      email: [this.entreprise.email, Validators.required],
      mdp: [this.entreprise.mdp, Validators.required]
    })
  }


  onSubmitConnexion() {
this.isLogin=true;
    // *on recupere les données du formulaire
    const form = this.loginForm.value

    this.entreprise = Object.assign(this.entreprise, form)
    console.log('entreprise', this.entreprise)

    this._dataService.login(this.entreprise).subscribe((response: any) => {

      console.warn( response)

      this.tkn = response.body.token
      localStorage.setItem('token', this.tkn)
       this._route.navigate(['overview'])

    })
  }

  //   }
  //   onSubmitRegister() {
  //  // *on recupere les données du formulaire
  //  const form = this.registerForm.value

}


