import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: HttpClient ) { }

  getContacts(){
    return this.http.get(`${ENV.urlBase}/users`).toPromise()
  }

  getContact(idUser: number){
    return this.http.get(`${ENV.urlBase}/users/${idUser}`).toPromise()
  }

  getAlbums(idUser){
    return this.http.get(`${ENV.urlBase}/albums?userId=${idUser}`).toPromise()
  }

  getAlbum(idAlbum: number){
    return this.http.get(`${ENV.urlBase}/albums/${idAlbum}`).toPromise()
  }

  getPhoto(idAlbum: number){
    return this.http.get(`${ENV.urlBase}/photos?albumId=${idAlbum}`).toPromise()
  }
}
