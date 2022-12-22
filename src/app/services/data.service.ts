import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Entreprise } from '../models/entreprise';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import{Salarie} from '../models/salarie'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //* url de base pour le backend
  urlDB = `${environment.API_URL}`

  constructor(private _http: HttpClient, private _router: Router) { }

  // ! LOGIN ENTREPRISE
  login(loginValues: any): Observable<any> {
    console.warn('dans login')
    return this._http.post(`${this.urlDB}/entreprise/login`, loginValues, { observe: 'response' });
  }

  // ! REGISTER
  register(registerValues: any): Observable<any> {
    return this._http.post(`${this.urlDB}/entreprise/registerEntreprise`, registerValues, { observe: 'response' });
  }


//  *****************************************************
// ********************** SALARIE ***********************
// ******************************************************

    // ! LOGIN SALARIE
    loginSalarie(loginValues: any): Observable<any> {
      console.warn('dans login')
      return this._http.post(`${this.urlDB}/salarie/login`, loginValues, { observe: 'response' });
    }

  // ! REGISTER SALARIE
  registerSalarie(registerValues: any): Observable<any> {
    return this._http.post(`${this.urlDB}/salarie/register`, registerValues, { observe: 'response' });
  }

// ***********************************************************************************************************************

  // Cette méthode permet de récupérer le token via register
  getToken(): string | null {
    // on recupere directement notre objet
    const newTkn = localStorage.getItem('token')
    if (newTkn) {
      return newTkn
    }
    return null
  }


  // ! GET PROFILE
  // * on recupere tous les infos de la personne qui se connecte
  getProfile(): Observable<Entreprise> {
    // const headers = new HttpHeaders().append("Authorization", `${this.getToken()}`)
    // * on recupere les infos du profile de la personne qui se connecte >>>>>>>> route profile
    return this._http.get<Entreprise>(this.urlDB + "/entreprise/profile")
  }

  // ! UPDATE
  updateEntreprise(registerValues: any): Observable<any> {
    // const headers = new HttpHeaders().append("Authorization", `${this.getToken()}`)
    // * on recupere les infos du profile de la personne qui se connecte >>>>>>>> route profile
    return this._http.put<Entreprise>(this.urlDB + "/entreprise/profile", { formulaire: registerValues })

  }
// ******************************************
// ****** **************contrat *************
// ******************************************
  // ! POUR LE CONTRAT
  getAllSalarie(): Observable<Entreprise> {
    const headers = new HttpHeaders().append("Authorization", `${this.getToken()}`)
    // * on recupere les infos du profile de la personne qui se connecte >>>>>>>> route profile
    return this._http.get<any>(this.urlDB + "/entreprise/addcontrat")
  }

// ! GET SALARIE SELECTED
getOneSalarie(id_salarie:any):Observable<any> {
  // const headers = new HttpHeaders().append("Authorization", `${this.getToken()}`)
  // * on recupere les infos du profile de la personne qui se connecte >>>>>>>> route profile
 return this._http.get<any>(this.urlDB + "/entreprise/addcontrat/"+ id_salarie)
}


// ! POST le contrat
createContrat(values:any):Observable<any> {
  // const headers = new HttpHeaders().append("Authorization", `${this.getToken()}`)
  // * on recupere les infos du profile de la personne qui se connecte >>>>>>>> route profile
 return this._http.post<any>(`${this.urlDB}/entreprise/addcontrat`, values, { observe: 'response' })

}


//  *****************************************************
// ********************** SALARIE ***********************
// ******************************************************

// ! GET PROFILE
  // * on recupere tous les infos de la personne qui se connecte
  getProfileSalarie(): Observable<Salarie> {
    const headers = new HttpHeaders().append("Authorization", `${this.getToken()}`)
    // * on recupere les infos du profile de la personne qui se connecte >>>>>>>> route profile
    return this._http.get<Salarie>(this.urlDB + "/salarie/profile", { headers: headers })
  }


  // ! UPDATE
  updateSalarie(values: any): Observable<any> {
    const headers = new HttpHeaders().append("Authorization", `${this.getToken()}`)
    // * on recupere les infos du profile de la personne qui se connecte >>>>>>>> route profile
    return this._http.put<Salarie>(this.urlDB + "/salarie/profile", { headers: headers, formulaire: values })

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
    localStorage.removeItem('token')
    // *on redirige sur login
    this._router.navigate((['/']))
  }

}
