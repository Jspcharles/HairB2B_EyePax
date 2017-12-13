import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hairstylist-profile',
  templateUrl: './hairstylist-profile.component.html',
  styleUrls: ['./hairstylist-profile.component.css'],
})
export class HairstylistProfileComponent implements OnInit {
  name;
  usd;
  count;
  constructor(private  route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.usd = params['usd'] || 0;
        this.count = params['count'] || 0;
        this.name = params['name'] || 0;
      });
  }
}
