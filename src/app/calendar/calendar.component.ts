import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  items: Date[];

  constructor() {
  }

  ngOnInit() {

    this.items = [
      {
        day: 'Mon',
        month: 'Dec',
        date: '23'
      },
      {
        day: 'Tue',
        month: 'Dec',
        date: '24'
      },
      {
        day: 'Wed',
        month: 'Dec',
        date: '25'
      },
      {
        day: 'Thu',
        month: 'Dec',
        date: '26'
      },
      {
        day: 'Thu',
        month: 'Dec',
        date: '26'
      },
      {
        day: 'Thu',
        month: 'Dec',
        date: '26'
      },
      {
        day: 'Thu',
        month: 'Dec',
        date: '26'
      },
      {
        day: 'Thu',
        month: 'Dec',
        date: '26'
      },
      {
        day: 'Thu',
        month: 'Dec',
        date: '26'
      },
      {
        day: 'Thu',
        month: 'Dec',
        date: '26'
      }
    ];
  }

}

interface Date {
  day: string;
  month: string;
  date: string;
}
