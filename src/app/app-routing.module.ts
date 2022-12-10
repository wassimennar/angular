import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { RechercheParReservationComponent } from './recherche-par-reservation/recherche-par-reservation.component';


const routes: Routes = [
  { path :"hotels" , component : HotelsComponent},
  { path :"add-hotel" , component : AddHotelComponent},
  { path: "", redirectTo: "hotels", pathMatch: "full" },
  {path: "updateHotel/:id", component: UpdateHotelComponent},
  {path: "rechercheParReservation", component : RechercheParReservationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
