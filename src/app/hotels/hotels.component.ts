import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/hotel.model';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html'
})
export class HotelsComponent implements OnInit   { 

  hotels : Hotel[];
  
  constructor(private hotelService : HotelService){
    //this.hotels = hotelService.listeHotel(); 

    //this.hotels=[];
  } 
  ngOnInit() : void {    
    this.chargerHotel();
  }

  chargerHotel(){
    this.hotelService.listeHotel().subscribe((hots: Hotel[]) => {
      this.hotels = hots;
      console.log(this.hotels)
      });
  }

  supprimerHotel(h: Hotel)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.hotelService.supprimerHotel(h.idHotel).subscribe(() => {
console.log("hotel supprimé");
//this.chargerHotel();
});
}

 

}

