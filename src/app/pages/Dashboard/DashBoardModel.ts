import {  FormGroup, FormControl } from '@angular/forms';
import {ListItemComponent} from '../Reservation-list-item/reservation-list-item';



export class DashBoardModelComponent  {

  _items: ListItemComponent[];
  _liveMessage: FormGroup;
  _dataSnapshot: Array<any> = [];
  _dataSnapshotStandBy: Array<any> = [];
  _standByDeleteValue: string;
  _numberClientWaitingTicketList: number;
  _numberClientWaitingReservation: number;
  _viewPortItems: any;
  _firstName: string;
  _lastName: string;
  _ticketConfirmation: any;
  _lastPosition: any;
  _userPosition: any;
  _hiddenPublicity = false;
  _idsTicket: any;
  _firstNamesTicket: any;
  _lastNamesTicket: any;
  _idsTicketStandby: any;
  _firstNamesTicketStandby: any;
  _lastNamesTicketStandby: any;
  _idsReservation: any;
  _dateReservation: any;
  _timeReservation: any;
  _firstNamesReservation: any;
  _lastNamesReservation: any;


  get items(): ListItemComponent[] {
    return this._items;
  }

  set items(value: ListItemComponent[]) {
    this._items = value;
  }

  get __liveMessage(): FormGroup {
    return this._liveMessage;
  }

  set __liveMessage(value: FormGroup) {
    this._liveMessage = value;
  }

  get dataSnapshot(): Array<any> {
    return this._dataSnapshot;
  }

  set dataSnapshot(value: Array<any>) {
    this._dataSnapshot = value;
  }

  get dataSnapshotStandBy(): Array<any> {
    return this._dataSnapshotStandBy;
  }

  set dataSnapshotStandBy(value: Array<any>) {
    this._dataSnapshotStandBy = value;
  }

  get standByDeleteValue(): string {
    return this._standByDeleteValue;
  }

  set standByDeleteValue(value: string) {
    this._standByDeleteValue = value;
  }

  get numberClientWaitingTicketList(): number {
    return this._numberClientWaitingTicketList;
  }

  set numberClientWaitingTicketList(value: number) {
    this._numberClientWaitingTicketList = value;
  }

  get numberClientWaitingReservation(): number {
    return this._numberClientWaitingReservation;
  }

  set numberClientWaitingReservation(value: number) {
    this._numberClientWaitingReservation = value;
  }

  get viewPortItems(): any {
    return this._viewPortItems;
  }

  set viewPortItems(value: any) {
    this._viewPortItems = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get ticketConfirmation(): any {
    return this._ticketConfirmation;
  }

  set ticketConfirmation(value: any) {
    this._ticketConfirmation = value;
  }

  get lastPosition(): any {
    return this._lastPosition;
  }

  set lastPosition(value: any) {
    this._lastPosition = value;
  }

  get userPosition(): any {
    return this._userPosition;
  }

  set userPosition(value: any) {
    this._userPosition = value;
  }

  get hiddenPublicity(): boolean {
    return this._hiddenPublicity;
  }

  set hiddenPublicity(value: boolean) {
    this._hiddenPublicity = value;
  }

  get idsTicket(): any {
    return this._idsTicket;
  }

  set idsTicket(value: any) {
    this._idsTicket = value;
  }

  get firstNamesTicket(): any {
    return this._firstNamesTicket;
  }

  set firstNamesTicket(value: any) {
    this._firstNamesTicket = value;
  }

  get lastNamesTicket(): any {
    return this._lastNamesTicket;
  }

  set lastNamesTicket(value: any) {
    this._lastNamesTicket = value;
  }

  get idsTicketStandby(): any {
    return this._idsTicketStandby;
  }

  set idsTicketStandby(value: any) {
    this._idsTicketStandby = value;
  }

  get firstNamesTicketStandby(): any {
    return this._firstNamesTicketStandby;
  }

  set firstNamesTicketStandby(value: any) {
    this._firstNamesTicketStandby = value;
  }

  get lastNamesTicketStandby(): any {
    return this._lastNamesTicketStandby;
  }

  set lastNamesTicketStandby(value: any) {
    this._lastNamesTicketStandby = value;
  }

  get idsReservation(): any {
    return this._idsReservation;
  }

  set idsReservation(value: any) {
    this._idsReservation = value;
  }

  get dateReservation(): any {
    return this._dateReservation;
  }

  set dateReservation(value: any) {
    this._dateReservation = value;
  }

  get timeReservation(): any {
    return this._timeReservation;
  }

  set timeReservation(value: any) {
    this._timeReservation = value;
  }

  get firstNamesReservation(): any {
    return this._firstNamesReservation;
  }

  set firstNamesReservation(value: any) {
    this._firstNamesReservation = value;
  }

  get lastNamesReservation(): any {
    return this._lastNamesReservation;
  }

  set lastNamesReservation(value: any) {
    this._lastNamesReservation = value;
  }




}
