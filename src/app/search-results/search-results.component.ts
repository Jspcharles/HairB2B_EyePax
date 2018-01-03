import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  stylistDetails = [];
  OriginalDetails = [];
  need;
  type;
  showMessage;
  hname;
  preferred_locations = [];
  id;
  location;
  skill;
  name;
  charlName;
  define;
  filter;
  add;
  countResults;

  selected;
  selectedData;

  // onNotifyClicked(message:string): void{
  //   this.showMessage = message;
  // }
  onSelect(){
    this.stylistDetails = this.OriginalDetails;
  }

  onSelect1(val) {
    console.log(val)
    this.stylistDetails = this.OriginalDetails.filter(x => {

      for (var i=0; i<x.skill.length; i++){
        // console.log(x.skill[i] + ' ' + val);
        if (x.skill[i] === val){
          return x.skill[i] === val;
        }
      }
    })
  }

  onSelect3(val){
    console.log(val);
  }

  onSelect2(val) {
    console.log(val);
    console.log(this.OriginalDetails);
    this.stylistDetails = this.OriginalDetails.filter(x => {
      console.log(x.address_line_1);
      return x.address_line_1 === val;
    });
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
            this.OriginalDetails = data;
            console.log(this.stylistDetails);
          }
        );
      }

      if (value.all == 'All') {
        this.http.get<any>('/api/stylist_db/stylist_details').subscribe(
          data => {
            this.stylistDetails = data;
            this.OriginalDetails = data;
            this.countResults = this.stylistDetails.length;
          }
        );
      }

      if (value.location) {
        this.location = value.location;
        this.http.get<any>('/api/stylist_db/stylist_details/bylocation/' + this.location).subscribe(
          data => {
            this.stylistDetails = data;
            this.OriginalDetails = data;
            this.countResults = this.stylistDetails.length;
            this.define = 'location - ' + this.location;
          }
        );
      }

      if (value.skill) {
        this.skill = value.skill;
        this.http.get<any>('/api/stylist_db/stylist_details/bySkill/' + this.skill).subscribe(
          data => {
            this.stylistDetails = data;
            this.OriginalDetails = data;
            this.countResults = this.stylistDetails.length;
            this.define = 'location wise';
            this.define = 'Skill - ' + this.skill;
          }
        );
      }

      if (value.name) {
        this.name = value.name;
        this.http.get<any>('/api/stylist_db/stylist_details/byName/' + this.name).subscribe(
          data => {
            this.stylistDetails = data;
            this.OriginalDetails = data;
            console.log('Print my name :' + this.charlName);
            this.countResults = this.stylistDetails.length;
            this.define = 'Name - ' + this.name;
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
