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
  preferred_locations = [];

  countResults;

  // onNotifyClicked(message:string): void{
  //   this.showMessage = message;
  // }

  onClickLocFiltered(): void{
    this.http.get<any>('/api/stylist/getStylist/loc').subscribe(
      data => {
        this.stylistDetails = data;
        this.countResults = this.stylistDetails.length;
      }
    );
  }

  constructor(private  route: ActivatedRoute, private http: HttpClient) {

    this.http.get<any>('/api/stylist/getStylistName').subscribe(
      data => {
        this.stylistDetails = data;
        // console.log(this.stylistName);
        // console.log(this.stylistName.length);
        this.countResults = this.stylistDetails.length;
      }
    );


  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.need = params['need'] || 0;
        this.type = params['type'] || 0;
      });
  }
}

interface Stylist {
  name: string;
  address: string;
  cost: number;
  skills: string[];
}
