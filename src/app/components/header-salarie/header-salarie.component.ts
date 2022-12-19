import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header-salarie',
  templateUrl: './header-salarie.component.html',
  styleUrls: ['./header-salarie.component.scss']
})
export class HeaderSalarieComponent implements OnInit {

// pour le menu
opened=true

  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
  }


  onDisconect() {

    this._dataService.clearToken()
  }
}
