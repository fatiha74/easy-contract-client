import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';
import { Entreprise } from 'src/app/models/entreprise';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title = 'signatureJS';
  signaturePad!: SignaturePad;
  @ViewChild('canvas') canvasEl!: ElementRef;
  signatureImg!: string;

  entreprise = new Entreprise()

  registerForm!: FormGroup

  errorPass = true
  isWomen!: any
  civilite: any[] = [
    { value: 'Madame', viewValue: 'Madame' },
    { value: 'Monsieur', viewValue: 'Monsieur' }]

  constructor(
    private _snackBar: MatSnackBar,
    private _fb: FormBuilder,
    private _dataService: DataService,
    private _route: Router
  ) { }

  ngOnInit(): void {

    this.registerForm = this._fb.group({


      civilite: [this.entreprise.civilite, Validators.required],
      nom: [this.entreprise.nom, Validators.required],
      prenom: [this.entreprise.prenom, Validators.required],
      telephone: [this.entreprise.telephone, Validators.required],
      rue: [this.entreprise.rue, Validators.required],
      cp: [this.entreprise.cp, Validators.required],
      ville: [this.entreprise.ville, Validators.required],
      email: [this.entreprise.email, Validators.required],
      mdp: [this.entreprise.mdp, Validators.required],
      confirmmdp: ["", Validators.required],
      siret: [this.entreprise.siret, Validators.required],
      raison_sociale: [this.entreprise.raison_sociale, Validators.required],
      code_ape: [this.entreprise.code_ape, Validators.required],
      signature: [this.entreprise.signature]

    })

  }
  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  onSubmit() {

    const form = this.registerForm.value
    const password = form.mdp
    const confirmPass = form.confirmmdp


    if (password !== confirmPass) {
      this.errorPass = true;
      this._snackBar.open('mot de passe different', 'ok', {
        verticalPosition: 'top',
        horizontalPosition: 'end',
        duration: 2000,
        panelClass: ['red-snackbar']

      })
      return;
    }

    // on va fusionner les deux objets
    //   je vais affecter a this user la fusion, form vient fusionner au user
    this.entreprise = Object.assign(this.entreprise, form)


    this._dataService.register(this.entreprise).subscribe((response: any) => {
      console.log(response)
      let role = response.body.role
      localStorage.setItem('token', response.body.token)
      localStorage.setItem('role', role)
      this._route.navigate(['/overview'])
    })
  }


  startDrawing(event: Event) {
    console.log(event);
    // works in device not in browser
  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
    this.entreprise.signature = this.signaturePad.toDataURL();
    console.log(this.signatureImg)
    return this.signatureImg



    // const base64Signature = this.signaturePad.toDataURL();
    // this.signatureImg = base64Signature;
    // this.entreprise.signature = base64Signature;
    // return this.signatureImg
  }


}
