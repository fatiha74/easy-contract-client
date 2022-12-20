import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contrat-modal',
  templateUrl: './contrat-modal.component.html',
  styleUrls: ['./contrat-modal.component.scss']
})
export class ContratModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public infos: any,
    private _dataService: DataService,
    private _matDialogRef: MatDialogRef<ContratModalComponent>
  ) { }

  ngOnInit(): void {
  }

}
