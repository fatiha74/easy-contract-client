import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick(a: boolean) {
    if (a) {
      console.log('entreprise')
    } else {
      console.log('salarie')
    }
  }
}

