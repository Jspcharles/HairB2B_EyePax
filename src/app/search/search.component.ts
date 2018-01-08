import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import {ElementRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  need: String[] = ['Name', 'Skill', 'Location','all'];
  qwe = 'all';



  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  public query = '';
  public stylist_Names = [];
  public stylist_Locations = [];
  public stylist_Skills = [];

  public filteredList = [];
  public elementRef;

  constructor(myElement: ElementRef, private http: HttpClient) {
    this.elementRef = myElement;

      this.http.get<any>('/api/stylist_db/stylist_details/names').subscribe(
        data => {
          this.stylist_Names = data;
          // console.log(this.stylist_Names);
        }
      );

    this.http.get<any>('/api/stylist_db/stylist_details/locations').subscribe(
      data => {
        this.stylist_Locations = data;
        // console.log(this.stylist_Locations);
      }
    );

    this.http.get<any>('/api/stylist_db/stylist_details/skills').subscribe(
      data => {
        this.stylist_Skills = data;
        // console.log(this.stylist_Skills);
      }
    );
  }



  filter() {

    if (this.qwe === 'Name') {

      if (this.query !== "") {
        this.filteredList = this.stylist_Names.filter(function (el) {
          return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
      } else {
        this.filteredList = [];
      }
    }

    if (this.qwe === 'Location') {

      if (this.query !== "") {
        this.filteredList = this.stylist_Locations.filter(function (el) {
          return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
      } else {
        this.filteredList = [];
      }
    }

    if (this.qwe === 'Skill') {

      if (this.query !== "") {
        this.filteredList = this.stylist_Skills.filter(function (el) {
          return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
      } else {
        this.filteredList = [];
      }
    }
  }

  select(item){
    this.query = item;
    this.filteredList = [];
  }

}
