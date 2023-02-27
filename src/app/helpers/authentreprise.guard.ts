import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { DataService } from '../services/data.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentrepriseGuard implements CanActivate {
  constructor(private _route:Router,
    private _snackBar:MatSnackBar,
    private _dataService:DataService){}

   

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


     // * on recupere le token
     const token = this._dataService.getToken()

     if (token && (localStorage.getItem('role')=='true')) {
       // *
       return true;
     } else {

       this._snackBar.open("Vous n'êtes pas connecté, vous n'avez pas accès à cette page", 'ok', { verticalPosition: 'top' })
       return this._route.navigate([''])
     }
  }

}
