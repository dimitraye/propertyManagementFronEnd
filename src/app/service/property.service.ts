import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../model/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  url: string = "http://localhost:3000/properties";
  totalCost! : number;
  priceBySquare! : number;
  rent! : number;

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

  getTotalCost(price : number, notaryFees : number, renovation : number)  {
    //Prix du bien + frais de notaire + coût des travaux
    return this.totalCost = price + notaryFees + renovation;
  }

  getPriceBySquare() {
    //Coût total / surface

  }

  getRent() {
    //Rent * 12 / coût total * 100

  }
}
