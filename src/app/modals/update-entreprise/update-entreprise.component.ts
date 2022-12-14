import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Entreprise } from 'src/app/models/entreprise';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-entreprise',
  templateUrl: './update-entreprise.component.html',
  styleUrls: ['./update-entreprise.component.scss']
})
export class UpdateEntrepriseComponent implements OnInit {

  entreprise = new Entreprise()

  majForm!:FormGroup

  constructor(
    private _fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) public infos: any,
    private _dataService: DataService,
    private _matDialogRef: MatDialogRef<UpdateEntrepriseComponent>,
    ) { }

  ngOnInit(): void {

    console.log(this.infos)

    this.majForm = this._fb.group({


      civilite: [this.infos[0].civilite, Validators.required],
      nom: [this.infos[0].nom, Validators.required],
      prenom: [this.infos[0].prenom, Validators.required],
      telephone: [this.infos[0].telephone, Validators.required],
      rue: [this.infos[0].rue, Validators.required],
      cp: [this.infos[0].cp, Validators.required],
      ville: [this.infos[0].ville, Validators.required],
      email: [this.infos[0].email, Validators.required],
      mdp: ["", Validators.required],
       confirmmdp: ["", Validators.required],
      siret: [this.infos[0].siret, Validators.required],
      raison_sociale: [this.infos[0].raison_sociale, Validators.required],
      code_ape: [this.infos[0].code_ape, Validators.required]

    })

  }
onSubmit(){

  // *on recupere les données du formulaire
    const form = this.majForm.value


console.log(form)

      // *on recupere le profile
      this._dataService.updateEntreprise(form).subscribe((response: any) => {

        console.warn(response)
      })


      this._dataService.updateEntreprise(form).subscribe(response => {

        // on close avec la deuxieme souscription
        this._matDialogRef.close()

      })
}
}
