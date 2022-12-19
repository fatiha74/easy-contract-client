import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Salarie } from '../models/salarie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataSalarieService {


   //* url de base pour le backend
   urlDB = `${environment.API_URL}`

  constructor(private _http: HttpClient, private _router: Router) { }


  // ! LOGIN SALARIE
  login(loginValues: any): Observable<any> {
    console.warn('dans login')
    return this._http.post(`${this.urlDB}/salarie/login`, loginValues, { observe: 'response' });
  }



  // Cette méthode permet de récupérer le token via register
  getToken(): string | null {
    // on recupere directement notre objet
    const newTkn = localStorage.getItem('token_s')
    if (newTkn) {
      return newTkn
    }
    return null
  }

// ! GET PROFILE
  // * on recupere tous les infos de la personne qui se connecte
  getProfile(): Observable<Salarie> {
    const headers = new HttpHeaders().append("Authorization", `${this.getToken()}`)
    // * on recupere les infos du profile de la personne qui se connecte >>>>>>>> route profile
    return this._http.get<Salarie>(this.urlDB + "/entreprise/profile", { headers: headers })
  }


    // *
    clearToken() {
      // * on indique quel token on clean
      localStorage.removeItem('token_s')
      // *on redirige sur login
      this._router.navigate((['/']))
    }

}
