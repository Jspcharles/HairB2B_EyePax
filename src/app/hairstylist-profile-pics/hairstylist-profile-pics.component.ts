import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hairstylist-profile-pics',
  templateUrl: './hairstylist-profile-pics.component.html',
  styleUrls: ['./hairstylist-profile-pics.component.css']
})
export class HairstylistProfilePicsComponent implements OnInit {

  id;
  images = [];

  constructor(private  route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(value => {
      this.id = value.id;
      console.log(this.id);
      this.http.get<any>('/api/stylist_db/stylist_details/gallery/'+ this.id).subscribe(
        data => {
          this.images = data[0].gallery;
          console.log(this.images);
        }
      );
    })
  }

  ngOnInit() {
  }

}
