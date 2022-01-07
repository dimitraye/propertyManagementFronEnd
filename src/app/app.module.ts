import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPropertiesComponent } from './component/list-properties/list-properties.component';
import { ViewPropertyComponent } from './component/view-property/view-property.component';
import { CreatePropertyComponent } from './component/create-property/create-property.component';
import { UpdatePropertyComponent } from './component/update-property/update-property.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListPropertiesComponent,
    ViewPropertyComponent,
    CreatePropertyComponent,
    UpdatePropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
