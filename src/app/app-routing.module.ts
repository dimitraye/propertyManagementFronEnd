import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePropertyComponent } from './component/create-property/create-property.component';
import { ListPropertiesComponent } from './component/list-properties/list-properties.component';
import { ViewPropertyComponent } from './component/view-property/view-property.component';

const routes: Routes = [
  { path : 'properties' , component : ListPropertiesComponent},
  { path : 'properties/add' , component : CreatePropertyComponent},
  { path : 'properties/:id' , component : ViewPropertyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
