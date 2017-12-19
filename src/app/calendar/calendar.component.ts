import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import _date = moment.unitOfTime._date;
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  day: any[] = [];
  show = false;
  disDate: any[];
  acer = true;
  bookDate;
  finalBookDate='25';

  days__: Day[] = [];

  selectedDate: any;

  toggleShow(date) {
    this.show = !this.show;

    this.selectedDate = date;

  }

  slotShow1(date) {
    const d = this.days__.find(value => {
      return value.date === date.date;
    });
    d.showSlot1 = !d.showSlot1;
  }

  slotShow2(date) {
    const d = this.days__.find(value => {
      return value.date === date.date;
    });
    d.showSlot2 = !d.showSlot2;

  }

  // showNotAvaDate(){
  //     for (let i = 0;i<30;i++){
  //       if (this.day === this.disDate[i]){
  //         return true;
  //       }
  //     }
  // }

  makeBooking1() {
    this.bookDate = this.selectedDate.format('D MMMM 2017, dddd') + (' - Morning');
  }

  makeBooking2() {
    this.bookDate = this.selectedDate.format('D MMMM 2017, dddd') + (' - Evening');
  }

  // toggleShow2() {
  //
  //   if (this.selectedDate = true){
  //     this.makeBooking();
  //   }
  // }

  constructor() {

    // this.disDate = ['20','55'];

    // for (let i =0; i<30; i++){
    //   if (this.day[i] === '20'){
    //     this.acer = true;
    //   }
    //   return this.acer;
    // }

  }

  ngOnInit() {

    for (let i = 0; i < 14; i++) {
      this.day[i] = this.getDate(i);
      this.days__.push({date: this.day[i], showSlot1: false, showSlot2: false});
    }

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

interface Day {
  date: any;
  showSlot1: boolean;
  showSlot2: boolean;
}
