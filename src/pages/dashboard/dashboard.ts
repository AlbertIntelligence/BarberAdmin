import { Component } from '@angular/core';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-root',
  templateUrl: 'dashboard.html'
})
export class DashboardComponent {




   idsTicket = [];
   firstNamesTicket = [];
   lastNamesTicket = [];

   idsReservation = [];
   dateReservation = [];
   timeReservation = [];
   firstNamesReservation = [];
   lastNamesReservation = [];
   numberClientWaitingTicketList = 0;
   numberClientWaitingReservation = 0;




constructor() {
    this.TicketListTable();
    this.ReservationTable();
    this.ClientWaiting();
    this.TotalReservation();

  }



  TicketListTable() {
     const listOfUsers = firebase.database().ref('TicketList/Users/');
     listOfUsers.limitToFirst(5).on('value', function(snapshot) {
       const ids = [];
       const firstNames = [];
       const lastNames = [];
       snapshot.forEach(function(childSnapshot) {

         const id = childSnapshot.key;
         const firstName = childSnapshot.val().firstName.toUpperCase();
         const lastName = childSnapshot.val().lastName.toUpperCase();
         ids.push(id);
         firstNames.push(firstName);
         lastNames.push(lastName);
       }.bind(this));

         this.idsTicket = ids,
         this.firstNamesTicket = firstNames,
         this.lastNamesTicket =  lastNames


     }.bind(this));
   }

  ReservationTable() {
    const listOfUsers = firebase.database().ref('Appointments/Users/');
    listOfUsers.limitToFirst(2).on('value', function(snapshot) {
      const ids = [];
      const dates = [];
      const times = [];
      const firstNames = [];
      const lastNames = [];
      snapshot.forEach(function(childSnapshot) {
        const id = childSnapshot.key;
        const date = childSnapshot.val().Date.toUpperCase();
        const time = childSnapshot.val().Hour.toUpperCase();
        const firstName = childSnapshot.val().firstName.toUpperCase();
        const lastName = childSnapshot.val().lastName.toUpperCase();
        ids.push(id);
        dates.push(date);
        times.push(time);
        firstNames.push(firstName);
        lastNames.push(lastName);
      }.bind(this));


        this.idsReservation = ids,
        this.dateReservation = dates,
        this.timeReservation = times,
        this.firstNamesReservation = firstNames,
        this.lastNamesReservation =  lastNames


    }.bind(this));
  }

  ClientWaiting() {
    const listOfUsers = firebase.database().ref('TicketList/Users/');
    listOfUsers.on('value', function(snapshot) {
      var numberClientWaitingTicketList = 0;
      snapshot.forEach(function(childSnapshot) {
        numberClientWaitingTicketList++;
      }.bind(this));
      this.numberClientWaitingTicketList = numberClientWaitingTicketList
    }.bind(this));
  }

  TotalReservation() {
    const listOfUsers = firebase.database().ref('Appointments/Users/');
    listOfUsers.on('value', function(snapshot) {
      var numberClientWaitingReservation = 0;
      snapshot.forEach(function(childSnapshot) {
        numberClientWaitingReservation++;
      }.bind(this));
      this.numberClientWaitingReservation = numberClientWaitingReservation
    }.bind(this));
  }


}
