import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../model/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  url: string = "http://localhost:3000/properties";
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

  getTotalCost(property : Property) : number {
    //Prix du bien + frais de notaire + coût des travaux
    return Number(property.price) + Number(property.notaryFees) + Number(property.renovation);
  }

  getPriceBySquare(property : Property) : number{
    //Coût total / surface
    //console.log("total cost :" , totalCost);
    return Number(this.getTotalCost(property))/Number(property.surface);

  }

  getRent(property : Property) : number {
    //Rent * 12 / coût total * 100
    return ((Number(property.rent)*12) / Number(this.getTotalCost(property))) * 100;
  }
}
