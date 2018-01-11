import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-hairstylist-profile',
  templateUrl: './hairstylist-profile.component.html',
  styleUrls: ['./hairstylist-profile.component.css'],
})
export class HairstylistProfileComponent implements OnInit {
  name;
  usd;
  county;
  id;
  first_name;
  last_name;
  description;
  mrng_cost;
  evng_cost;
  profile_pic;
  rating;
  address;
  telephone;
  skills = [];
  type;
  busy_dates = [];

  // profileDetails = [];
  constructor(private  route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.id = value.id;
      console.log(this.id);
      this.http.get<any>('/api/stylist_db/stylist_details/'+this.id).subscribe(
        data => {
          this.first_name = data[0].first_name;
          this.last_name = data[0].last_name;
          this.address = data[0].address_line_1;
          this.mrng_cost = data[0].mrng_cost;
          this.evng_cost = data[0].evng_cost;
          this.profile_pic = data[0].profile_pic;
          this.description = data[0].description;
          this.rating = data[0].rating;
          this.telephone = data[0].telephone;
          this.skills = data[0].skill;
          this.telephone = data[0].telephone;
          this.type = data[0].type;
          console.log(this.skills);
        }
      );
    })
  }
}
