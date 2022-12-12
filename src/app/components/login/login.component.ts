import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Salarie } from 'src/app/models/salarie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //on instancie la class User
  salarie = new Salarie()
  // stock token
  tkn!: any
  // user!: any
  loginForm!: FormGroup

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      // id:[this.getRandomInit()],
      email: [this.salarie.email, Validators.required],
      password: [this.salarie.mdp, Validators.required]
    })
  }
  onSubmit() {

  }
  
}
