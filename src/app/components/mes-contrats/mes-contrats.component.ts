import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mes-contrats',
  templateUrl: './mes-contrats.component.html',
  styleUrls: ['./mes-contrats.component.scss']
})
export class MesContratsComponent implements OnInit {
  contrats!: any[]
  contratsEncours!: any[]
  isChecked!: true
  allContratFiltered!: any[]
  allContratFilteredEncours!: any[]

  searchBar: FormControl = new FormControl()

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    
    this._dataService.getAllMyContratEntreprise().subscribe((response: any) => {

      console.log(response)

      this.contrats = response
      this.allContratFiltered = [...this.contrats]
    })

    this._dataService.getContratEnCours().subscribe((response: any) => {

      this.contratsEncours = response
      this.allContratFilteredEncours = [...this.contratsEncours]

    })



    this.searchBar.valueChanges.subscribe((resultats: any) => {
      if (this.isChecked) {

        this.allContratFiltered = this.contrats.filter((user: any) => {
          if (user) {
            return user.fonction.toLowerCase().includes(resultats.toLowerCase()) ||
            user.statut.toLowerCase().includes(resultats.toLowerCase()) ||
              user.prenom.toLowerCase().includes(resultats.toLowerCase()) ||
              user.nom.toLowerCase().includes(resultats.toLowerCase())
          }
        })
      } else {
        this.allContratFiltered = this.contratsEncours.filter((user: any) => {
          if (user) {
            return user.fonction.toLowerCase().includes(resultats.toLowerCase()) ||
              user.statut.toLowerCase().includes(resultats.toLowerCase()) ||
              user.prenom.toLowerCase().includes(resultats.toLowerCase()) ||
              user.nom.toLowerCase().includes(resultats.toLowerCase())
          }
        })
      }
    })
  }

}
