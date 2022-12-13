import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import {MatListModule} from '@angular/material/list';
import {MatSidenav} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  opened = true

  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
  }


  onDisconect() {

    this._dataService.clearToken()
  }
}
