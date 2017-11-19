import { Component, Input } from '@angular/core';

export interface ListItem {
  key?: any;
  Date?: string;
  Hour?: string;
  firstName?: number;
  lastName?: string;
}

@Component({
  selector: 'app-reservation-list-item',
  template: `
    <div class="row bg-white has-shadow" style="padding-top: 10px;padding-bottom: 10px">
    <div class="left-col col-lg-6 d-flex align-items-center justify-content-between">
              <div class="project-title d-flex align-items-center">
                  <div class="text"><h4 class="h7"> {{item.firstName + " "+ item.lastName}} </h4></div>
             </div>
             <div class="project-date"><span class="hidden-sm-down" >{{item.Date}}</span></div>
    </div>
    <div class="right-col col-lg-6 d-flex align-items-center">
      <div class="time"><i class="fa fa-clock-o">{{item.Hour}}</i></div>
    </div>
    </div>
    `,

  styleUrls: ['./reservation-list-item.scss']
})
export class ListItemComponent {
  @Input()
  item: ListItem;
}
