import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParReservationComponent } from './recherche-par-reservation/recherche-par-reservation.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    AddHotelComponent,
    UpdateHotelComponent,
    RechercheParReservationComponent,
    RechercheParCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
