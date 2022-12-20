import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { FormGroup } from '@angular/forms';
import { Salarie } from 'src/app/models/salarie';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {

salarieContrat!:any[]
  contratForm!: FormGroup

  constructor(private _dataService:DataService) { }

  ngOnInit(): void {

 // *on recupere le profile
 this._dataService.getAllSalarie().subscribe((response: any) => {

  // this.salarieContrat = response.salarie_id
  // salarie:{"salarie_id":response.salarie_id,"salarie_nom": response.nom}
  this.salarieContrat=response
  console.warn(this.salarieContrat)

})

  }
onSubmit(){

}

}
