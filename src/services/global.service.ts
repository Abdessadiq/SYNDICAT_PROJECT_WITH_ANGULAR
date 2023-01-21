import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Annonce } from 'src/models/annonce';
import { Appartement } from 'src/models/appartement';
import { Caisse } from 'src/models/caisse';
import { Immeuble } from 'src/models/immeuble';
import { Reglement } from 'src/models/reglement';
import { User } from 'src/models/user';

@Injectable()
export class GlobalService {
  private url = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  /*-------------Start Immeubles services------------*/
  public getImmeubles(mc: String, page: number, size: number) {
    return this.http
      .get(
        this.url +
          '/searchImmeuble?mc=' +
          mc +
          '&page=' +
          page +
          '&size=' +
          size
      )
      .pipe(map((resp) => resp));
  }
  public saveImmeuble(immeuble: Immeuble) {
    return this.http
      .post(this.url + '/immeuble', immeuble)
      .pipe(map((resp) => resp));
  }
  public getListImmeubles() {
    return this.http.get(this.url + '/listImmeubles').pipe(map((resp) => resp));
  }

  public getImmeuble(id: number) {
    return this.http
      .get(this.url + '/immeuble/' + id)
      .pipe(map((resp) => resp));
  }

  updateImmeuble(immeuble: Immeuble) {
    return this.http
      .put(this.url + '/immeuble/' + immeuble.id, immeuble)
      .pipe(map((resp) => resp));
  }
  deleteImmeuble(id: number) {
    return this.http
      .delete(this.url + '/immeuble/' + id)
      .pipe(map((resp) => resp));
  }

  /**-------------End  Immeuble Service------------------------------- */

  /**--------------Start  Appartements service----------------------------- */
  public getListAppartements() {
    return this.http
      .get(this.url + '/listAppartements')
      .pipe(map((resp) => resp));
  }
  public getAppartement(id: number) {
    return this.http
      .get(this.url + '/appartement/' + id)
      .pipe(map((resp) => resp));
  }

  public saveAppartement(appartement: Appartement) {
    return this.http
      .post(this.url + '/appartement', appartement)
      .pipe(map((resp) => resp));
  }

  updateAppartement(appart: Appartement) {
    return this.http
      .put(this.url + '/appartement/' + appart.id, appart)
      .pipe(map((resp) => resp));
  }
  deleteAppartement(id: number) {
    return this.http
      .delete(this.url + '/appartement/' + id)
      .pipe(map((resp) => resp));
  }

  /**-------------End  Appartement  Services------------------------------- */

  /**--------------Start user service----------------------------- */

  public getUtilisateurs(mc: String, page: number, size: number) {
    return this.http
      .get(
        this.url +
          '/searchUtilisateur?mc=' +
          mc +
          '&page=' +
          page +
          '&size=' +
          size
      )
      .pipe(map((resp) => resp));
  }

  public getUtilisateur(id: number) {
    return this.http
      .get(this.url + '/utilisateur/' + id)
      .pipe(map((resp) => resp));
  }

  public saveUser(user: User) {
    return this.http
      .post(this.url + '/utilisateur', user)
      .pipe(map((resp) => resp));
  }

  updateUser(user: User) {
    return this.http
      .put(this.url + '/utilisateur/' + user.id, user)
      .pipe(map((resp) => resp));
  }
  deleteUser(id: number) {
    return this.http
      .delete(this.url + '/utilisateur/' + id)
      .pipe(map((resp) => resp));
  }

  /**--------------End User Services----------------------------- */

  /**--------------Start Annonces Services----------------------------- */
  public getAnnonces(mc: String, page: number, size: number) {
    return this.http
      .get(
        this.url + '/searchAnnonce?mc=' + mc + '&page=' + page + '&size=' + size
      )
      .pipe(map((resp) => resp));
  }

  public saveAnnonce(annonce: Annonce) {
    return this.http
      .post(this.url + '/annonce', annonce)
      .pipe(map((resp) => resp));
  }

  public getAnnonce(id: number) {
    return this.http.get(this.url + '/annonce/' + id).pipe(map((resp) => resp));
  }

  public updateAnnonce(annonce: Annonce) {
    return this.http
      .put(this.url + '/annonce/' + annonce.id, annonce)
      .pipe(map((resp) => resp));
  }

  public deleteAnnonce(id: number) {
    return this.http
      .delete(this.url + '/annonce/' + id)
      .pipe(map((resp) => resp));
  }
  /**--------------End  Annonces services----------------------------- */

  /**--------------Start gelement Service----------------------------- */
  public getReglements(mc: String, page: number, size: number) {
    return this.http
      .get(
        this.url +
          '/searchReglement?mc=' +
          mc +
          '&page=' +
          page +
          '&size=' +
          size
      )
      .pipe(map((resp) => resp));
  }
  public saveReglement(reg: Reglement) {
    return this.http
      .post(this.url + '/reglement', reg)
      .pipe(map((resp) => resp));
  }

  deleteReglement(id: number) {
    return this.http
      .delete(this.url + '/reglement/' + id)
      .pipe(map((resp) => resp));
  }

  updateReglement(reg: Reglement) {
    return this.http
      .put(this.url + '/reglement/' + reg.id, reg)
      .pipe(map((resp) => resp));
  }
  public getReglement(id: number) {
    return this.http
      .get(this.url + '/reglement/' + id)
      .pipe(map((resp) => resp));
  }

  /**--------------End Reglement Service----------------------------- */
  /**--------------Start Caisse Service ---------------------------- */

  public getListCaisses() {
    return this.http.get(this.url + '/listCaisses').pipe(map((resp) => resp));
  }

  deleteCaisse(id: number) {
    return this.http
      .delete(this.url + '/caisse/' + id)
      .pipe(map((resp) => resp));
  }
  public getListUtilisateurs() {
    return this.http
      .get(this.url + '/listUtilisateurs')
      .pipe(map((resp) => resp));
  }

  public saveCaisse(caisse: Caisse) {
    return this.http
      .post(this.url + '/caisse', caisse)
      .pipe(map((resp) => resp));
  }
  public getCaisse(id: number) {
    return this.http.get(this.url + '/caisse/' + id).pipe(map((resp) => resp));
  }
  updateCaisse(c: Caisse) {
    return this.http
      .put(this.url + '/caisse/' + c.id, c)
      .pipe(map((resp) => resp));
  }

  /**--------------End Caisse Service----------------------------- */
}
