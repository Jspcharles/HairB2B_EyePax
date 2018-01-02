import {Component, OnInit} from '@angular/core';
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
  id;
  location;
  skill;

  countResults;

  // onNotifyClicked(message:string): void{
  //   this.showMessage = message;
  // }

  onClickLocFiltered(): void {

  }

  constructor(private  route: ActivatedRoute, private http: HttpClient) {

    // this.http.get<any>('/api/stylist_db/stylist_details').subscribe(
    //   data => {
    //     this.stylistDetails = data;
    //     // console.log(this.stylistName);
    //     // console.log(this.stylistName.length);
    //     this.countResults = this.stylistDetails.length;
    //   }
    // );
  }

  ngOnInit() {

    this.route.queryParams.subscribe(value => {
      if (value.id) {
        this.id = value.id;
        console.log(this.id);
        this.http.get<any>('/api/stylist_db/stylist_details/' + this.id).subscribe(
          data => {
            this.stylistDetails = data;
            console.log(this.stylistDetails);
          }
        );
      }

      if (value.all == 'All') {
        this.http.get<any>('/api/stylist_db/stylist_details').subscribe(
          data => {
            this.stylistDetails = data;
            this.countResults = this.stylistDetails.length;
          }
        );
      }

      if (value.location){
        this.location = value.location;
        this.http.get<any>('/api/stylist_db/stylist_details/bylocation/' + this.location).subscribe(
          data => {
            this.stylistDetails = data;
            this.countResults = this.stylistDetails.length;
          }
        );
      }

      if (value.skill){
        this.skill = value.skill;
        this.http.get<any>('/api/stylist_db/stylist_details/bySkill/' + this.skill).subscribe(
          data => {
            this.stylistDetails = data;
            this.countResults = this.stylistDetails.length;
          }
        );
      }
    });


    // if (this.route.queryParams == this.name){
    //   return false;
    // }
  }

  onFiltered(message: string): void {
    this.showMessage = message;
    console.log('Charles' + this.showMessage);
  }
}

interface Stylist {

}
