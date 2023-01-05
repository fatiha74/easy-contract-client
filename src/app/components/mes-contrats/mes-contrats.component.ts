import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mes-contrats',
  templateUrl: './mes-contrats.component.html',
  styleUrls: ['./mes-contrats.component.scss']
})
export class MesContratsComponent implements OnInit {
  contrats!: any[]
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getAllMyContratEntreprise().subscribe((response: any) => {

      console.log(response)

      this.contrats=response
    })
  }

}
