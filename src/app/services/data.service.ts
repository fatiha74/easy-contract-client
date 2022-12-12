import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    urlDB =`${environment.API_URL}api/users`

  constructor(private _http: HttpClient, private _router: Router) { }

   // Cette méthode permet de récupérer le token via register
 static getToken(): string | null {
  // on recupere directement notre objet
  const newTkn = localStorage.getItem('token')
  if (newTkn) {
    return newTkn
  }
  return null
}

  // * on recupere tous les infos de la personne qui se connecte
  getProfileUserCurrent(): Observable<Salarie> {
    const headers = new HttpHeaders().append("Authorization", `${DataService.getToken()}`)
    // * on recupere les infos du profile de la personne qui se connecte >>>>>>>> route profile
    return this._http.get<Salarie>(this.urlDB + "/profile", { headers: headers })
  }

 // *
 clearToken() {
  // * on indique quel token on clean
  localStorage.removeItem('digichat-token')
  // *on redirige sur login
  this._router.navigate((['/']))
}

}
