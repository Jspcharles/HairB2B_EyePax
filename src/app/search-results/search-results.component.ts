import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  name;
  address;
  need;
  cost;
  skills;

  constructor(private  route: ActivatedRoute, private http: HttpClient) {
    this.http.get<Stylist>('/api/stylist/getsamplestylist').subscribe(
      data => {
        this.name = data.name;
        this.address = data.address;
        this.cost = data.cost;
        this.skills = data.skills;
        console.log(this.skills);
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
