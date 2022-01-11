import { Component, OnInit } from '@angular/core';
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
  constructor(private propertyService : PropertyService) { }

  ngOnInit(): void {
    this.property = new Property();
  }

  onCalculate(){
  }

  

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  
  totalCost(){
    //Appelle la fonction qui calcule le prix total
  }

}




