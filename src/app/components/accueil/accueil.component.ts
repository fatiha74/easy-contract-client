import { Component, OnInit } from '@angular/core';
import { MatChip, MatChipList } from '@angular/material/chips';

import {MatCard} from '@angular/material/card';
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

