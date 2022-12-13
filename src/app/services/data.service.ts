import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Entreprise } from '../models/entreprise';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Salarie } from '../models/salarie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //* url de base pour le backend
  urlDB = `${environment.API_URL}`

  constructor(private _http: HttpClient, private _router: Router) { }

  // ! LOGIN
  login(loginValues: any): Observable<any> {
    console.warn('dans login')
    return this._http.post(`${this.urlDB}/entreprise/login`, loginValues, { observe: 'response' });
  }

  // ! REGISTER
  register(registerValues: any): Observable<any> {
    return this._http.post(`${this.urlDB}/entreprise/registerEntreprise`, registerValues, { observe: 'response' });
  }



  // Cette méthode permet de récupérer le token via register
  getToken(): string | null {
    // on recupere directement notre objet
    const newTkn = localStorage.getItem('token')
    if (newTkn) {
      return newTkn
    }
    return null
  }



  // * on recupere tous les infos de la personne qui se connecte
  // getProfileUserCurrent(): Observable<Salarie> {
  //   const headers = new HttpHeaders().append("Authorization", `${DataService.getToken()}`)
  //   // * on recupere les infos du profile de la personne qui se connecte >>>>>>>> route profile
  //   return this._http.get<Salarie>(this.urlDB + "/profile", { headers: headers })
  // }

  // *
  clearToken() {
    // * on indique quel token on clean
    localStorage.removeItem('digichat-token')
    // *on redirige sur login
    this._router.navigate((['/']))
  }

}
