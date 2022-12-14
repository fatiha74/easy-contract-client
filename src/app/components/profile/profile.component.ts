import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  myProfil!: any

  isEdit=false

  constructor(
    private _dataService : DataService
    ) { }

  ngOnInit(): void {

        // *on recupere le profile
        this._dataService.getProfile().subscribe((response: any) => {
          this.myProfil = response
          console.warn(response)
        })

  }

}
