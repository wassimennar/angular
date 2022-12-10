import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Hotel } from '../model/hotel.model';
import { Reservation } from '../model/reservation.model';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
})
export class AddHotelComponent implements OnInit {
  

  newHotel = new Hotel();
  reservations! : Reservation[];
  newIdRes! : number;
  newReservation! : Reservation;
  message? : string;


  constructor ( private hotelService : HotelService,
                private router : Router){ }
  

  ngOnInit(): void {
    this.hotelService.listeReservation().
    subscribe(res => {this.reservations = res._embedded.reservations;
    console.log(res);
    });

    //this.reservations = this.hotelService.listeReservations();
  }



  addHotel(){
    this.newHotel.reservation = this.reservations.find(res => res.idRes == this.newIdRes)!;
    this.hotelService.ajouterHotel(this.newHotel)
    .subscribe(hot => {
    console.log(hot);
    this.router.navigate(['hotels']);
    });
    }

 }
