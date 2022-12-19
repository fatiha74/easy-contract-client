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
    @Inject(MAT_DIALOG_DATA) public infos: any,
    private _dataService: DataService,
    private _matDialogRef: MatDialogRef<UpdateSalarieComponent>,
  ) { }

  ngOnInit(): void {
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
       nom_jeune_fille:[this.infos[0].nom_jeune_fille],
       num_ss:[this.infos[0].num_ss, Validators.required],


    })
  }


  onSubmit() {

    // *on recupere les données du formulaire
    const form = this.majForm.value
    console.log(form)

    // *on recupere le profile
    this._dataService.updateSalarie(form).subscribe((response: any) => {

      console.warn("update",response)
      this._matDialogRef.close()
    })

  }
  onCancel(){
    this._matDialogRef.close()
  }

}
