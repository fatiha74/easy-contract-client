import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mes-salaries',
  templateUrl: './mes-salaries.component.html',
  styleUrls: ['./mes-salaries.component.scss']
})
export class MesSalariesComponent implements OnInit {
  salaries!: any[]
  allSalarieFiltered!: any[]
  searchBar: FormControl = new FormControl()
  constructor(
    private _dataService: DataService,
  ) { }

  ngOnInit(): void {

    this._dataService.getAllMySalaries().subscribe((response: any) => {
      this.salaries = response
      this.allSalarieFiltered= [...this.salaries]
      console.log(response)
    })

    this.searchBar.valueChanges.subscribe((resultats: any) => {

      this.allSalarieFiltered = this.salaries.filter((user: any) => {

        return user.nom.toLowerCase().includes(resultats.toLowerCase()) ||
          user.prenom.toLowerCase().includes(resultats.toLowerCase())
      })
    })
  }


}
