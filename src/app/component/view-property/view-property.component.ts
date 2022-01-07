import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../../model/property.model';
import { PropertyService } from '../../service/property.service';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.scss']
})
export class ViewPropertyComponent implements OnInit {

  property! : Property;

  constructor(private propertyService : PropertyService,
      private activatedRoute : ActivatedRoute,
      private router : Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.propertyService.getOne(id).subscribe(data => {
      console.log('id', id);
      console.log('property', data);
      this.property = data;
    });
  }

}
