
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { Component, Inject, OnInit } from '@angular/core';

import * as html2pdf from 'html2pdf.js';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {




  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dataService: DataService,
    private _matDialogRef: MatDialogRef<PdfComponent>
  ) { }

  ngOnInit(): void {


  }

  downloadPDF() {
    var element = document.getElementById('text');
    var opt = {
      margin: 1,
      filename: 'Contrat de travail.pdf',
      image: { type: 'jpg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  }


}


