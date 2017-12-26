import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  stylistName: Stylist[] = [];
  need;

  countResults;

  constructor(private  route: ActivatedRoute, private http: HttpClient) {

    this.http.get<Stylist>('/api/stylist/getStylistName').subscribe(
      data => {
        this.stylistName = data;
        // console.log(this.stylistName);
        // console.log(this.stylistName.length);
        this.countResults = this.stylistName.length;
      }
    );


  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.need = params['need'] || 0;
      });
  }
}

interface Stylist {
  name: string;
  address: string;
  cost: number;
  skills: string[];
}
