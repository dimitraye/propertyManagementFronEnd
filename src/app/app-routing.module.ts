import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPropertiesComponent } from './component/list-properties/list-properties.component';

const routes: Routes = [
  {path : 'properties' , component : ListPropertiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
