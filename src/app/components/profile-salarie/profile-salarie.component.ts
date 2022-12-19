import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DataSalarieService } from 'src/app/services/data-salarie.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-salarie',
  templateUrl: './profile-salarie.component.html',
  styleUrls: ['./profile-salarie.component.scss']
})
export class ProfileSalarieComponent implements OnInit {


  myProfil!:any
  majForm!:FormGroup


  constructor(
    private _dataSalarieService : DataSalarieService,
    private _fb:FormBuilder,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {

      // *on recupere le profile
      this._dataSalarieService.getProfile().subscribe((response: any) => {
        this.myProfil = response
        console.warn(response)
      })

  }

}
