import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  stylistDetails: Stylist[] = [];
  need;
  type;
  showMessage;
  hname;
  preferred_locations = [];

  countResults;

  // onNotifyClicked(message:string): void{
  //   this.showMessage = message;
  // }

  onClickLocFiltered(): void{
    this.http.get<any>('/api/stylist_db/stylist_details/Melbourne').subscribe(
      data => {
        this.stylistDetails = data;
        this.countResults = this.stylistDetails.length;
      }
    );
  }

  constructor(private  route: ActivatedRoute, private http: HttpClient) {

    this.http.get<any>('/api/stylist_db/stylist_details').subscribe(
      data => {
        this.stylistDetails = data;
        // console.log(this.stylistName);
        // console.log(this.stylistName.length);
        this.countResults = this.stylistDetails.length;
      }
    );
  }

  ngOnInit() {

  }

  onFiltered(message:string):void{
    this.showMessage = message;
    console.log("Charles" + this.showMessage);
  }
}

interface Stylist {

}
