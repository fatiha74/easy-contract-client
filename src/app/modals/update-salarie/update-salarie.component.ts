import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update-salarie',
  templateUrl: './update-salarie.component.html',
  styleUrls: ['./update-salarie.component.scss']
})
export class UpdateSalarieComponent implements OnInit {


majForm!:FormGroup
  constructor(
    private _fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dataService: DataService,
    private _matDialogRef: MatDialogRef<UpdateSalarieComponent>
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
       nom_jeune_fille:[this.data.nom_jeune_fille],
       num_ss:[this.data.num_ss, Validators.required],


    })
  }


  onSubmit() {

    // *on recupere les données du formulaire
    const form = this.majForm.value
    console.log(form)

    // *on recupere le profile
    this._dataService.updateSalarie(form).subscribe((response: any) => {

      console.warn("update",response)
      this._matDialogRef.close({data:form})
    })

  }
  onCancel(){
    this._matDialogRef.close()
  }

}
