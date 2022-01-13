import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Property } from 'src/app/model/property.model';
import { PropertyService } from '../../service/property.service';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.scss']
})
export class CreatePropertyComponent implements OnInit {

  isShow = true;
  property! : Property;
  totalcost! : number;
  price! : number;

  constructor(private propertyService : PropertyService) { }


  ngOnInit(): void {
    this.property = new Property();
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  onGetPrice(form : NgForm) {
    console.log(form.value);
  }
  
  totalCost(property : Property){
    return this.propertyService.getTotalCost(property);
  }

  priceBySquare(property : Property) {
    return this.propertyService.getPriceBySquare(property);
  }

  rent(property : Property) {
    return this.propertyService.getRent(property);
  }

}




