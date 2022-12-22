import { FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { jsPDF } from 'jspdf'

@Component({
  selector: 'app-contrat-modal',
  templateUrl: './contrat-modal.component.html',
  styleUrls: ['./contrat-modal.component.scss']
})
export class ContratModalComponent implements OnInit {
  infos!: any
  salarieProfil!: any
  constructor(

    @Inject(MAT_DIALOG_DATA) public data: FormGroup,
    private _dataService: DataService,
    private _matDialogRef: MatDialogRef<ContratModalComponent>
  ) { }

  ngOnInit(): void {

    console.log("data", this.data.value)
    this.infos = this.data.value

    console.log("id SALARIE", this.infos.fki_salarie)
    this._dataService.getOneSalarie(this.infos.fki_salarie).subscribe((response: any) => {

      this.salarieProfil = response
      console.log("LE SALARIE CHOISI", response)
    })






  }
  onClick() {
    console.log("-----------------------------------------", this.data.value)
    // *on recupere le profile
    this._dataService.createContrat(this.data.value).subscribe((response: any) => {

      console.log("dans modale cree contrat", this.data.value)
      console.warn(response)
      // pour mettre à jour dans profile
      this._matDialogRef.close()
    })

  }
  onCancel() {
    this._matDialogRef.close()
  }
}
