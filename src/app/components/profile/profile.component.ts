import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';
import { Entreprise } from 'src/app/models/entreprise';
import { MatDialog } from '@angular/material/dialog';
import SignaturePad from "signature_pad";
import { UpdateEntrepriseComponent } from 'src/app/modals/update-entreprise/update-entreprise.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {

  myProfil!: any
  majForm!: FormGroup
  isEdit = false

  constructor(
    private _dataService: DataService,
    private _fb: FormBuilder,
    private _matDialog: MatDialog
  ) { }



  ngOnInit(): void {

    // *on recupere le profile
    this._dataService.getProfile().subscribe((response: any) => {
      this.myProfil = response
    })

  }
  openDialog() {
    const dialogRef = this._matDialog.open(UpdateEntrepriseComponent, { data: this.myProfil })
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result,"ok after close")
      if (result) {
        this.myProfil = result.data
      }
  return window.location.reload()
    })
  }

}
