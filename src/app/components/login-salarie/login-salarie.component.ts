import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataSalarieService } from 'src/app/services/data-salarie.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Salarie } from 'src/app/models/salarie';

@Component({
  selector: 'app-login-salarie',
  templateUrl: './login-salarie.component.html',
  styleUrls: ['./login-salarie.component.scss']
})
export class LoginSalarieComponent implements OnInit {


  salarie = new Salarie()

  // stock token
  tkn!: any

  loginForm!: FormGroup

  constructor(
    private _fb:FormBuilder,
    private _route:Router,
    private _dataSalarieService:DataSalarieService
  ) { }

  ngOnInit(): void {

    console.warn('ok')
    this.loginForm = this._fb.group({
      // id:[this.getRandomInit()],
      email: [this.salarie.email, Validators.required],
      mdp: [this.salarie.mdp, Validators.required]
    })
  }
  onSubmitConnexion() {

    // *on recupere les données du formulaire
    const form = this.loginForm.value

    this.salarie = Object.assign(this.salarie, form)
    console.log('salarie', this.salarie)

    this._dataSalarieService.login(this.salarie).subscribe((response: any) => {

      console.warn( response)

      this.tkn = response.body.token_s

      localStorage.setItem('token_s', this.tkn)
       this._route.navigate(['overview_s'])

    })
  }

}
