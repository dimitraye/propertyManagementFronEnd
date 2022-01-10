import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/model/property.model';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.scss']
})
export class CreatePropertyComponent implements OnInit {

  property! : Property;
  
  constructor() { }

  ngOnInit(): void {
    this.property = new Property();
  }

  onCalculate(){
    console.log(this.property);
    
  }

}
