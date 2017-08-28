import { Component } from '@angular/core';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-root',
  templateUrl: 'dashboard.html'
})
export class DashboardComponent {


  tableObjects = {
    'position': '',
    'userPosition': '',
    'paymentCompleted': ''
  }
  firstName: any = '';
  lastName: any = '' ;
  phoneNunber: any = '' ;
  constructor() {
    this.sendLiveTableData();
  }

   sendLiveTableData() {
     const listOfUsers = firebase.database().ref('TicketList/Users/');
     listOfUsers.on('value', function(snapshot) {
       snapshot.forEach(function(childSnapshot) {
         const childKey = childSnapshot.key;
         const childData = childSnapshot.val();
         this.tableObjects.userPosition = childData.firstName;
         console.log(self);
         return false;
       });
     });
   }


}
