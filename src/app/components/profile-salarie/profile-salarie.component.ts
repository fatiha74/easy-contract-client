import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateSalarieComponent } from 'src/app/modals/update-salarie/update-salarie.component';

@Component({
  selector: 'app-profile-salarie',
  templateUrl: './profile-salarie.component.html',
  styleUrls: ['./profile-salarie.component.scss']
})
export class ProfileSalarieComponent implements OnInit {


  myProfil!:any
  majForm!:FormGroup


  constructor(
    private _dataService : DataService,
    private _fb:FormBuilder,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {

      // *on recupere le profile
      this._dataService.getProfileSalarie().subscribe((response: any) => {
        this.myProfil = response
        console.warn("hello",response)


      })

  }

  openDialog(){
    const dialogRef = this._matDialog.open( UpdateSalarieComponent, { data: this.myProfil })


    dialogRef.afterClosed().subscribe((result:any) => {

console.log(result)
      this._dataService.getProfileSalarie().subscribe((response: any) => {
        this.myProfil = response
        console.warn(response)
      })

    })
  }

}
