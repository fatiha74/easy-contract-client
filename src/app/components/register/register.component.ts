import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';
import { Entreprise } from 'src/app/models/entreprise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


entreprise = new Entreprise()

registerForm!: FormGroup

  constructor(private _fb:FormBuilder,private _dataService:DataService,private _route:Router) { }

  ngOnInit(): void {

    this.registerForm = this._fb.group({


      civilite: [this.entreprise.civilite, Validators.required],
      nom: [this.entreprise.nom, Validators.required],
      prenom: [this.entreprise.prenom, Validators.required],
      telephone: [this.entreprise.telephone, Validators.required],
      rue: [this.entreprise.rue, Validators.required],
      cp: [this.entreprise.cp, Validators.required],
      ville: [this.entreprise.ville, Validators.required],
      email: [this.entreprise.email, Validators.required],
      mdp: [this.entreprise.mdp, Validators.required],
      siret: [this.entreprise.siret, Validators.required],
      raison_sociale: [this.entreprise.raison_sociale, Validators.required],
      code_ape: [this.entreprise.code_ape, Validators.required]

    })

  }

  onSubmit(){

    
    const profil = this.registerForm.value
    const password = profil.password
    const confirmPass = profil.confirmPassword

  }

}
