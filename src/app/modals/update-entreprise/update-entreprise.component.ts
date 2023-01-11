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

  majForm!: FormGroup

  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dataService: DataService,
    private _matDialogRef: MatDialogRef<UpdateEntrepriseComponent>
  ) { }

  ngOnInit(): void {



    this.majForm = this._fb.group({


      civilite: [this.data.civilite, Validators.required],
      nom: [this.data.nom, Validators.required],
      prenom: [this.data.prenom, Validators.required],
      telephone: [this.data.telephone, Validators.required],
      rue: [this.data.rue, Validators.required],
      cp: [this.data.cp, Validators.required],
      ville: [this.data.ville, Validators.required],
      email: [this.data.email, Validators.required],
      mdp: ["", Validators.required],
      confirmmdp: ["", Validators.required],
      siret: [this.data.siret, Validators.required],
      raison_sociale: [this.data.raison_sociale, Validators.required],
      code_ape: [this.data.code_ape, Validators.required]

    })

  }
  onSubmit() {

    // *on recupere les données du formulaire
    const form = this.majForm.value


    // *on recupere le profile
    this._dataService.updateEntreprise(form).subscribe((response: any) => {

      console.log("dans modale",form)
      console.warn(response)
      // pour mettre à jour dans profile
      this._matDialogRef.close({data: response, test : "ok"})
    })

  }

  onCancel(){
    this._matDialogRef.close()
  }
}
