import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mes-contrats',
  templateUrl: './mes-contrats.component.html',
  styleUrls: ['./mes-contrats.component.scss']
})
export class MesContratsComponent implements OnInit {
  contrats!: any[]
  contratsEncours!:any[]
  isChecked!:true

  searchBar:new FromGroup()

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getAllMyContratEntreprise().subscribe((response: any) => {

      console.log(response)

      this.contrats=response
    })

    this._dataService.getContratEnCours().subscribe((response:any)=>{
      this.contratsEncours=response

    })

    this.searchBar.valueChanges.subscribe((resultats: any) => {

      this.allContratFiltered = this.contratBySalarie.filter((user: any) => {

        return user.fonction.toLowerCase().includes(resultats.toLowerCase())
          user.statut.toLowerCase().includes(resultats.toLowerCase())
          user.prenom.toLowerCase().includes(resultats.toLowerCase()) ||
          user.nom.toLowerCase().includes(resultats.toLowerCase())
      })
    })
  }

}
