import { Reservation } from './reservation.model';
export class ReservationWrapper{
_embedded!: { reservations: Reservation[]};
}
