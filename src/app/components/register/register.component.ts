import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';
import { Entreprise } from 'src/app/models/entreprise';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  entreprise = new Entreprise()

  registerForm!: FormGroup

  errorPass = true

  constructor(private _snackBar: MatSnackBar, private _fb: FormBuilder, private _dataService: DataService, private _route: Router) { }

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
       confirmmdp: ["", Validators.required],
      siret: [this.entreprise.siret, Validators.required],
      raison_sociale: [this.entreprise.raison_sociale, Validators.required],
      code_ape: [this.entreprise.code_ape, Validators.required]

    })

  }

  onSubmit() {


    const form = this.registerForm.value
    const password = form.mdp
    const confirmPass = form.confirmmdp


    if (password !== confirmPass) {
      this.errorPass = true;
      this._snackBar.open('mot de passe different', 'ok', {
        verticalPosition: 'top',
        horizontalPosition: 'end',
        duration: 2000,
        panelClass: ['red-snackbar']

      })
      return;
    }

    // on va fusionner les deux objets
    //   je vais affecter a this user la fusion, form vient fusionner au user
    this.entreprise = Object.assign(this.entreprise, form)


    this._dataService.register(this.entreprise).subscribe((response: any) => {


      localStorage.setItem('token', response.token)

    this._route.navigate(['/overview'])
  

    })


  }

}
