import { Injectable } from '@angular/core';
import { Hotel } from '../model/hotel.model';
import { Reservation } from '../model/reservation.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { ReservationWrapper } from '../model/reservationWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  apiURL: string = 'http://localhost:8080/hotels/api';
  apiURLRes: string = 'http://localhost:8080/hotels/res';
  hotels : Hotel[]; //un tableau de produit
  //reservations : Reservation [];
  hotel! : Hotel;



  constructor(private http : HttpClient) {

    /* this.reservations = [ {idRes : 1, nomRes : "wassim ennar"},
                          {idRes : 2 , nomRes : "mohamed hendez"}]; */

    /*this.hotels = [
      {idhotel : 1, nomhotel : "marriot hotel", prixnuiteehotel : 3000.600, dateentrehotel : new Date("01/14/2011"),
      reservation : {idRes : 1, nomRes : "wassim ennar"}},
      {idhotel : 2, nomhotel : "chiraton hotel", prixnuiteehotel : 450, dateentrehotel : new Date("12/17/2010"),
      reservation : {idRes : 1, nomRes : "wassim ennar"}},
      {idhotel : 3, nomhotel :"la badira", prixnuiteehotel : 900.123, dateentrehotel : new Date("02/20/2020"),
      reservation : {idRes : 2 , nomRes : "mohamed hendez"} }
    ];*/
   }


   listeHotel(): Observable<Hotel[]>{
    return this.http.get<Hotel[]>(apiURL) ;
    }


   ajouterHotel( hot: Hotel):Observable<Hotel>{
    return this.http.post<Hotel>(apiURL, hot, httpOptions);
    }
    
   

    supprimerHotel(id : number) {
      const url = `${apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      
     
      consulterHotel(id: number): Observable<Hotel> {
        const url = `${apiURL}/${id}`;
        return this.http.get<Hotel>(url);
        }
       
        updateHotel(hot :Hotel) : Observable<Hotel>
        {
        return this.http.put<Hotel>(apiURL, hot, httpOptions);
        }
        
     
      trierHotels()  { 
        this.hotels = this.hotels.sort((n1,n2) => {
        if (n1.idHotel > n2.idHotel) {
        return 1;
        }
        if (n1.idHotel < n2.idHotel) {
        return -1;
        }
        return 0;
        });
        }

        listeReservation():Observable<ReservationWrapper>{
          return this.http.get<ReservationWrapper>(this.apiURLRes);
          }

          rechercherParReservation(idRes: number):Observable< Hotel[]> {
            const url = `${this.apiURL}/prodscat/${idRes}`;
            return this.http.get<Hotel[]>(url);
            }
      



}
