import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';
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

  constructor(
    private _dataService:DataService,
    private _fb:FormBuilder) { }

  ngOnInit(): void {

 // *on recupere le profile
 this._dataService.getAllSalarie().subscribe((response: any) => {

  // this.salarieContrat = response.salarie_id
  // salarie:{"salarie_id":response.salarie_id,"salarie_nom": response.nom}
  this.salarieContrat=response


})

this.contratForm = this._fb.group({


  salarieSelect: ["", Validators.required],
 type_contrat: ["", Validators.required],
  duree: ["", Validators.required],
  date_debut: ["", Validators.required],
  date_fin: ["", Validators.required],
  periode: ["", Validators.required],
  remuneration: ["", Validators.required],
  motif: ["", Validators.required],


})


  }
onSubmit(){
console.log(this.contratForm)
}

}
