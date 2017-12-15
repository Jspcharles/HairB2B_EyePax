import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  show = false;

  toggleShow() {
    this.show = !this.show;
  }

  items: Date[];
  public day: any[] = [];

  constructor() {
  }

  ngOnInit() {

    for (let i = 0; i < 14; i++){
      this.day[i] = this.getDate(i);
    }

    this.items = [
      {
        day: 'Sun',
        month: 'Dec',
        date: '01'
      },
      {
        day: 'Sat',
        month: 'Dec',
        date: '02'
      },
      {
        day: 'Sun',
        month: 'Dec',
        date: '03'
      },
      {
        day: 'Mon',
        month: 'Dec',
        date: '04'
      },
      {
        day: 'Tue',
        month: 'Dec',
        date: '05'
      },
      {
        day: 'Wed',
        month: 'Dec',
        date: '06'
      },
      {
        day: 'Thu',
        month: 'Dec',
        date: '07'
      },
      {
        day: 'Fri',
        month: 'Dec',
        date: '08'
      },
      {
        day: 'Sat',
        month: 'Dec',
        date: '09'
      },
      {
        day: 'Sun',
        month: 'Dec',
        date: '10'
      },
      {
        day: 'Mon',
        month: 'Dec',
        date: '11'
      },
      {
        day: 'Tue',
        month: 'Dec',
        date: '12'
      },
      {
        day: 'Wed',
        month: 'Dec',
        date: '13'
      },
      {
        day: 'Thu',
        month: 'Dec',
        date: '14'
      },{
        day: 'Fri',
        month: 'Dec',
        date: '15'
      },
      {
        day: 'Sat',
        month: 'Dec',
        date: '16'
      },
      {
        day: 'Sun',
        month: 'Dec',
        date: '17'
      },
      {
        day: 'Mon',
        month: 'Dec',
        date: '18'
      },
      {
        day: 'Tue',
        month: 'Dec',
        date: '19'
      },
      {
        day: 'Wed',
        month: 'Dec',
        date: '20'
      },
      {
        day: 'Thu',
        month: 'Dec',
        date: '21'
      },{
        day: 'Fri',
        month: 'Dec',
        date: '22'
      },
      {
        day: 'Sat',
        month: 'Dec',
        date: '23'
      },
      {
        day: 'Sun',
        month: 'Dec',
        date: '24'
      },
      {
        day: 'Mon',
        month: 'Dec',
        date: '25'
      },
      {
        day: 'Tue',
        month: 'Dec',
        date: '26'
      },
      {
        day: 'Wed',
        month: 'Dec',
        date: '27'
      },
      {
        day: 'Thu',
        month: 'Dec',
        date: '28'
      },
      {
        day: 'Fri',
        month: 'Dec',
        date: '29'
      },
      {
        day: 'Sat',
        month: 'Dec',
        date: '30'
      },
      {
        day: 'Sun',
        month: 'Dec',
        date: '31'
      }
    ];
  }

  getDate(num) {
    return moment().add(num, 'days');
  }

}

interface Date {
  day: string;
  month: string;
  date: string;
}
