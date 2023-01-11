import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Salarie } from 'src/app/models/salarie';

@Component({
  selector: 'app-register-salarie',
  templateUrl: './register-salarie.component.html',
  styleUrls: ['./register-salarie.component.scss']
})
export class RegisterSalarieComponent implements OnInit {

 // stock token
  tkn!: any

  salarie = new Salarie()

  registerForm!: FormGroup

  errorPass = true
  constructor(
    private _snackBar: MatSnackBar,
    private _fb: FormBuilder,
    private _dataService: DataService,
    private _route: Router
  ) { }

  ngOnInit(): void {


    this.registerForm = this._fb.group({


      civilite: [this.salarie.civilite, Validators.required],
      nom: [this.salarie.nom, Validators.required],
      prenom: [this.salarie.prenom, Validators.required],
      telephone: [this.salarie.telephone, Validators.required],
      rue: [this.salarie.rue, Validators.required],
      cp: [this.salarie.cp, Validators.required],
      ville: [this.salarie.ville, Validators.required],
      email: [this.salarie.email, Validators.required],
      mdp: [this.salarie.mdp, Validators.required],
      confirmmdp: ["", Validators.required],
      nom_jeune_fille: [""],
      num_ss: [this.salarie.num_ss, Validators.required],
      date_naissance: [this.salarie.date_naissance, Validators.required],
      lieu_naissance: [this.salarie.lieu_naissance, Validators.required],
      pays_naissance: [this.salarie.pays_naissance, Validators.required],


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
    this.salarie = Object.assign(this.salarie, form)


    this._dataService.registerSalarie(this.salarie).subscribe((response: any) => {

   this.tkn = response.body.token

      localStorage.setItem('token', this.tkn)
      console.log(response.token)
      this._route.navigate(['/overview_s'])
    })
  }
}
