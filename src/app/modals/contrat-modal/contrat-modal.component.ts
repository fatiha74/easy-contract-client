import { FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { jsPDF } from 'jspdf'
import { PdfComponent } from '../pdf/pdf.component';

@Component({
  selector: 'app-contrat-modal',
  templateUrl: './contrat-modal.component.html',
  styleUrls: ['./contrat-modal.component.scss']
})
export class ContratModalComponent implements OnInit {
  infos!: any
  salarieProfil!: any
  contratId!: any
  constructor(

    @Inject(MAT_DIALOG_DATA) public data: FormGroup,
    private _dataService: DataService,
    private _matDialogRef: MatDialogRef<ContratModalComponent>,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {

    // console.log("data", this.data.value)
    this.infos = this.data.value

    console.log("id SALARIE", this.infos.fki_salarie)

    this._dataService.getOneSalarie(this.infos.fki_salarie).subscribe((response: any) => {

      this.salarieProfil = response
      console.log("LE SALARIE CHOISI", response)
    })


  }

  onClick() {

    // *on recupere le profile
    this._dataService.createContrat(this.data.value).subscribe((response: any) => {

      // * on recupere le id du contrat pour afficher le contrat de travail qui vient de se creer
      this.contratId = response.body.contrat_id

      this._dataService.getContratCree(this.contratId).subscribe((values: any) => {

        console.log("le contrat cree", values)
        this._matDialogRef.close()
        const dialogRef = this._matDialog.open(PdfComponent, {
          data: values,
          height: '800px',
          width: '900px'
        })

        dialogRef.afterClosed().subscribe((result: any) => {

          // console.log(result)
        })

      })
    })

  }

  // download() {
  //   var element = document.getElementById('table');
  //   var opt = {
  //     margin: 1,
  //     filename: 'output.pdf',
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  //   };
  // }
  //   // New Promise-based usage:

  //   html2pdf().from(element).set(opt).save();

  // }


  onCancel() {
    this._matDialogRef.close()
  }



  monPdf() {
    `
    <!DOCTYPE html>
<html lang="en">

<head>
  <title>HTML To PDF Angular</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>

  <div class="container">
    <h2>HTML To PDF Angular</h2>
    <table id="table" class="table table-striped">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>mary@example.com</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>july@example.com</td>
        </tr>
      </tbody>
    </table>
  </div>
  <button (click)="download()">Download PDF</button>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</body>

</html>
`
  }
}

