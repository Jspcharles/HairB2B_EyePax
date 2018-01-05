import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import _date = moment.unitOfTime._date;
import {any} from 'codelyzer/util/function';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  day: any[] = [];
  show = false;
  sessionDate: any[] = [];
  acer = true;
  bookDate;
  finalBookDate = '25';
  slotCost: any[] = [];
  cost1;
  cost2;
  days__: Day[] = [];
  total;

  busy_dates_received = false;

  // busy_date_1;
  // busy_date_2;
  // time_slot_busy_date_1
  // time_slot_busy_date_2
  day_busy;

  busy_date:busyDate[] = [];

  id;

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

    for (let i =0; i<this.sessionDate.length;i++){
      if (this.bookDate === this.sessionDate[i]){
        this.sessionDate.splice(i,1);
        this.slotCost.splice(i,1);
        return;
      }
    }
    this.sessionDate.push(this.bookDate);
    this.slotCost.push(this.cost1);
  }

  makeBooking2() {
    this.bookDate = this.selectedDate.format('D MMMM 2017, dddd') + (' - Evening');

    for (let i =0; i<this.sessionDate.length;i++){
      if (this.bookDate === this.sessionDate[i]){
        this.sessionDate.splice(i,1);
        this.slotCost.splice(i,1);
        return;
      }
    }
    this.sessionDate.push(this.bookDate);
    this.slotCost.push(this.cost2);
  }

  totalAmount() {
    this.total = 0;
    for (let i = 0; i<this.slotCost.length;i++) {
      this.total = this.total + this.slotCost[i];
      console.log(this.total);

    }
    return this.total;
  }

  // toggleShow2() {
  //
  //   if (this.selectedDate = true){
  //     this.makeBooking();
  //   }
  // }

  constructor(private  route: ActivatedRoute, private http: HttpClient) {


    // this.disDate = ['20','55'];

    // for (let i =0; i<30; i++){
    //   if (this.day[i] === '20'){
    //     this.acer = true;
    //   }
    //   return this.acer;
    // }

    this.route.params.subscribe(value => {
      this.id = value.id;
      console.log(this.id);
      this.http.get<any>('/api/stylist_db/stylist_details/'+this.id).subscribe(
        data => {
          this.cost1 = data[0].mrng_cost;
          this.cost2 = data[0].evng_cost;
          console.log(this.cost1);
          console.log(this.cost2);
        }
      );
    })

    // this.route.params.subscribe(value => {
    //   this.id = value.id;
    //   console.log(this.id);
    //   this.http.get<any>('/api/stylist_db/stylist_details/calendar/'+this.id).subscribe(
    //     data => {
    //       this.busy_date_1 = data[0].busy_date_1;
    //       this.busy_date_2 = data[0].busy_date_2;
    //       this.time_slot_busy_date_1 = data[0].time_slot_busy_date_1;
    //       this.time_slot_busy_date_2 = data[0].time_slot_busy_date_2;
    //       this.day_busy = data[0].day_busy;
    //       console.log(this.busy_date_1);
    //       console.log(this.busy_date_2);
    //       console.log(this.time_slot_busy_date_1);
    //       console.log(this.time_slot_busy_date_2);
    //       console.log(this.day_busy);
    //     }
    //   );
    // })

    this.route.params.subscribe(value => {
      this.id = value.id;
      console.log(this.id);
      this.http.get<any>('/api/stylist_db/stylist_details/busy_date/'+this.id).subscribe(
        data => {
          this.busy_date = data;
          console.log(this.busy_date);
          // this.busy_dates_received = true;
          for (let i = 0; i < 30; i++) {
            this.day[i] = this.getDate(i);
            this.days__.push({date: this.day[i], alreadyBooked1: this.isBusySlot1(this.day[i]), alreadyBooked2: this.isBusySlot2(this.day[i]), showSlot1: false, showSlot2: false});
          }
        }
      );
    })

  }

  isBusySlot1(day){
    for(let i = 0; i < this.busy_date.length; i++){
      if(this.busy_date[i].busy_date === day.format('YYYY-MM-DD') && this.busy_date[i].time_slot === 'Morning'){
        return true;
      }
    }
    return false;
  }

  isBusySlot2(day){
    for(let i = 0; i < this.busy_date.length; i++){
      if(this.busy_date[i].busy_date === day.format('YYYY-MM-DD') && this.busy_date[i].time_slot === 'Evening'){
        return true;
      }
    }
    return false;
  }

  ngOnInit() {

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
  alreadyBooked1: boolean;
  alreadyBooked2: boolean;
}

interface busyDate {
  id: number;
  busy_date: string;
  time_slot: string;
}
