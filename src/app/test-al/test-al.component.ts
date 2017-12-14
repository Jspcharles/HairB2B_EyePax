import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-al',
  templateUrl: './test-al.component.html',
  styleUrls: ['./test-al.component.css']
})
export class TestAlComponent implements OnInit {
  items: Array<any> = [];

  constructor() {
    this.items = [
      {
        day: "Mon",
        month: "Dec",
        date: "23"
      },
      {
        day: "Tue",
        month: "Dec",
        date: "24"
      },
      {
        day: "Wed",
        month: "Dec",
        date: "25"
      },
      {
        day: "Thu",
        month: "Dec",
        date: "26"
      },
      {
        day: "Thu",
        month: "Dec",
        date: "26"
      },
      {
        day: "Thu",
        month: "Dec",
        date: "26"
      },
      {
        day: "Thu",
        month: "Dec",
        date: "26"
      },
      {
        day: "Thu",
        month: "Dec",
        date: "26"
      },
      {
        day: "Thu",
        month: "Dec",
        date: "26"
      },
      {
        day: "Thu",
        month: "Dec",
        date: "26"
      }
    ];
  }

  ngOnInit() {
  }

}
