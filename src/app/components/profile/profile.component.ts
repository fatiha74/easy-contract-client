import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  myProfil!: any

  constructor(
    private _dataService : DataService
    ) { }

  ngOnInit(): void {

        // *on recupere le profile
        this._dataService.getProfile().subscribe((response: Entreprise) => {
          this.myProfil = response
          console.warn(response)
        })

  }

}
