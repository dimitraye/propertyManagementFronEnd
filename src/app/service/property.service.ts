import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../model/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  url: string = "http://localhost:4200/properties" 

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
}
