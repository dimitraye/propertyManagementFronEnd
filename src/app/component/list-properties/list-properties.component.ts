import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/model/property.model';
import { PropertyService } from 'src/app/service/property.service';

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.scss']
})
export class ListPropertiesComponent implements OnInit {

  constructor(
    private propertyService : PropertyService
  ) { }

  properties! : Property[];

  ngOnInit(): void {
    this.propertyService.getAll().subscribe(
      data =>{
        console.log('liste des biens' , data);
        this.properties = data;
      }
    );
  }

}
