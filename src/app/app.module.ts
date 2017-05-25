import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
