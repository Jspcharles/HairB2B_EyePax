import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  name = 'George Maxwell';
  usd = 255;
  country = 'Sydney';
  constructor() {
  }

  ngOnInit() {
  }

}
