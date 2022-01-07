import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../model/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  url: string = "http://localhost:3000/properties";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'//,
     // Authorization: 'my-auth-token'
    })
  };
  
  
  constructor(
    private http : HttpClient
  ) {}

  getAll(): Observable<Property[]> {
    return this.http.get<Property[]>(this.url);
  }

  getOne( id : number) : Observable<Property> {
    return this.http.get<Property>(this.url + '/' + id);
  }
}
