import { Component, OnInit } from '@angular/core';

import {MatCard} from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}

