import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mes-salaries',
  templateUrl: './mes-salaries.component.html',
  styleUrls: ['./mes-salaries.component.scss']
})
export class MesSalariesComponent implements OnInit {
  salaries!: any[]
  constructor(
    private _dataService: DataService,
  ) { }

  ngOnInit(): void {

    this._dataService.getAllMySalaries().subscribe((response: any) => {
      this.salaries = response
      console.log(response)
    })
  }


}
