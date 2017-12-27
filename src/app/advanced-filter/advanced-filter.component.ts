import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrls: ['./advanced-filter.component.css']
})
export class AdvancedFilterComponent implements OnInit {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  // onclick(): void{
  //   this.notify.emit("Message from Child");
  // }



  filterByLoc(): void{
    this.notify.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
