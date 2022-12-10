import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Hotel } from '../model/hotel.model';
import { Reservation } from '../model/reservation.model';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
})
export class UpdateHotelComponent {

  UpdateHotelComponent? : UpdateHotelComponent[];
  reservations! : Reservation[];
  updatedResId! : number;
  
  currentHotel = new Hotel();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private hotelService: HotelService) {} 

  ngOnInit(): void {

    this.hotelService.listeReservation().
subscribe(res => {this.reservations = res._embedded.reservations;
console.log(res);
});      
       this.hotelService.consulterHotel(this.activatedRoute.snapshot.params['id']).
    subscribe( hot =>{ this.currentHotel = hot; 
    this.updatedResId = this.currentHotel.reservation.idRes;

  } ) ;

  }


  updateHotel()
      {
        this.currentHotel.reservation = this.reservations.find(res => res.idRes == this.updatedResId)!;
        
        this.hotelService.updateHotel(this.currentHotel).subscribe(hot => {
          this.router.navigate(['hotels']); }
        );
      } 


}

