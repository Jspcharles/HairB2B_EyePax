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
  need: String[] = ['Name', 'Skill', 'Location'];
  qwe = 'Name';



  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  public query = '';
  public stylistNames = [];
  public filteredList = [];
  public elementRef;

  constructor(myElement: ElementRef, private http: HttpClient) {
    this.elementRef = myElement;

    this.http.get<any>('/api/stylist_db/stylist_details/names').subscribe(
      data => {
        this.stylistNames = data;
        console.log(this.stylistNames);
      }
    );
  }

  filter() {
    if (this.query !== ""){
      this.filteredList = this.stylistNames.filter(function(el){
        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    }else{
      this.filteredList = [];
    }
  }

  select(item){
    this.query = item;
    this.filteredList = [];

    this.notify.emit("Message from search");
  }


}
