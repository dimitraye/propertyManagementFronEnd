import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePropertyComponent } from './component/create-property/create-property.component';
import { ViewPropertyComponent } from './component/view-property/view-property.component';
import { ListPropertiesComponent } from './component/list-properties/list-properties.component';
import { UpdatePropertyComponent } from './component/update-property/update-property.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePropertyComponent,
    ViewPropertyComponent,
    ListPropertiesComponent,
    UpdatePropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
