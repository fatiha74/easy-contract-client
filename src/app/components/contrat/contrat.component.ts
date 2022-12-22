import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContratModalComponent } from 'src/app/modals/contrat-modal/contrat-modal.component';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { Salarie } from 'src/app/models/salarie';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {
  selectedValue!: string;
salarieContrat!:any[]
  contratForm!: FormGroup
statuts:any[] =[
  {value:'Cadre',viewValue:'Cadre'},
  {value:'Employé',viewValue:'Employé'},
  {value:'Agent de maitrise',viewValue:'Agent de maitrise'},
  {value:'Ouvrier',viewValue:'Ouvrier'}
]
  constructor(
    private _dataService:DataService,
    private _fb:FormBuilder,
    private _matDialog: MatDialog) { }

  ngOnInit(): void {

 // *on recupere le profile
 this._dataService.getAllSalarie().subscribe((response: any) => {

  // this.salarieContrat = response.salarie_id
  // salarie:{"salarie_id":response.salarie_id,"salarie_nom": response.nom}
  this.salarieContrat=response


})

this.contratForm = this._fb.group({


  fki_salarie: ["", Validators.required],
 type_contrat: ["", Validators.required],
  is_fulltime: ["", Validators.required],
  date_debut: ["", Validators.required],
  date_fin: ["", Validators.required],
  periode_essai: ["", Validators.required],
  remuneration: ["", Validators.required],
  motif: ["", Validators.required],
  fonction : ["",Validators.required],
  statut :["",Validators.required]


})


  }

openDialog() {

  console.log(this.contratForm)
  const dialogRef = this._matDialog.open(ContratModalComponent, { data: this.contratForm })

  dialogRef.afterClosed().subscribe((result: any) => {

    // console.log(result)
    // this._dataService.getProfile().subscribe((response: any) => {
    //   this.myProfil = response
    //   console.warn(response)
    // })

  })
}

}
