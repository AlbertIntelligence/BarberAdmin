/*
* Created By Lenz Petion
* CKL Group Inc.
* Last update October 3 2017
*
*
* */
import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import {  FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: 'dashboard.html'
})
export class DashboardComponent {


   standByDeleteValue:string;
   idsTicket = [];
   firstNamesTicket = [];
   lastNamesTicket = [];
   idsTicketStandby = [];
   firstNamesTicketStandby = [];
   lastNamesTicketStandby = [];

   idsReservation = [];
   dateReservation = [];
   timeReservation = [];
   firstNamesReservation = [];
   lastNamesReservation = [];
   numberClientWaitingTicketList = 0;
   numberClientWaitingReservation = 0;
   adForm: FormGroup;
   dataSnapshot:Array<any> = [];




constructor(private routerLink: Router) {
    this.TicketListTable();
    this.StandByListTable()
    this.ReservationTable();
    this.ClientWaiting();
    this.TotalReservation();
    this.adForm = new FormGroup({
      live: new FormControl()
    });

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

  StandByListTable() {
    const listOfUsers = firebase.database().ref('StandByList/Users/');
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

        this.idsTicketStandby = ids,
        this.firstNamesTicketStandby = firstNames,
        this.lastNamesTicketStandby =  lastNames


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

  logout() {
    //this.routerLink.navigate(['/dashboard']);

  }

  liveMesssage() {
    let model = this;
    const liveMessages = firebase.database().ref('Messages/');
    var temp = model;
    console.log(temp);
    liveMessages.update({
      "live" : temp,
    });
    //liveMessages.set(2);
  }

  saveAdChanges(){
    const liveMessages = firebase.database().ref('Messages');
    const data = this.adForm.value;
    liveMessages.set(data);
  }

  nextClient(){
    const firstUser = firebase.database().ref('TicketList/Users/').child(this.idsTicket[0]);
    firstUser.set(null);
  }
  removeFromStandByList() {
    const firstUser = firebase.database().ref('StandByList/Users/').child(this.idsTicketStandby[this.idsTicketStandby.indexOf(this.standByDeleteValue)]);
    firstUser.set(null);
  }

   moveToStandBy() {
     if (this.idsTicket[0] != null) {
       const toAdd = (this.idsTicketStandby.length + 1).toString();
     const oldRef = firebase.database().ref('TicketList/Users/' + this.idsTicket[0]);
     const newRef = firebase.database().ref('StandByList/Users/'+ toAdd);

     oldRef.once('value', function (snap) {
       newRef.set(snap.val(), function (error) {
         if (!error) {
           oldRef.remove();
         }
         else if (typeof(console) !== 'undefined' && console.error) {
           console.error(error);
         }
       });
     });
   }
  }


}
