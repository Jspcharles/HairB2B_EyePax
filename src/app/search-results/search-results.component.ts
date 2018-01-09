import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})



export class SearchResultsComponent implements OnInit {
  stylistDetails = [];

  OriginalDetails = [];
  type;
  showMessage;
  id;
  location;
  skill;
  name;
  define;
  countResults;

  pickDate;

  a: boolean = false;
  b: boolean = false;
  c: boolean = false;
  d: boolean = false;
  e: boolean = false;

  selected1;
  selected2;
  sliderValue1;
  sliderValue2;


  //function for clear the filter
  onSelect(){
    this.stylistDetails = this.OriginalDetails;
    this.countResults = this.stylistDetails.length;
    this.a = false;
    this.b = false;
    this.c = false;
    this.d = false;
    this.e = false;
    this.selected1 = "";
    this.selected2 = "";
  }

  filterAll(){
    if (this.selected1 === ""){
      this.a = false;
    }

    if (this.selected2 === ""){
      this.b = false;
    }

    if (this.a === true){
      this.stylistDetails = this.stylistDetails.filter(x =>{
        return x.address_line_1 === this.selected1;
      })
    }

    if (this.b === true){
      this.stylistDetails = this.stylistDetails.filter(x => {
        for (var i=0; i<x.skill.length; i++){
          // console.log(x.skill[i] + ' ' + val);
          if (x.skill[i] === this.selected2){
            return x.skill[i] === this.selected2;
          }
        }
      });
    }

    if (this.c === true){
      this.stylistDetails = this.stylistDetails.filter(x => {
        return x.mrng_cost <= this.sliderValue1;
      })
    }

    if (this.d === true){
      this.stylistDetails = this.stylistDetails.filter(x => {
        return x.mrng_cost <= this.sliderValue2;
      })
    }

    if (this.e === true){
      this.stylistDetails = this.stylistDetails.filter(x => {

        for (var i=0; i<x.busy_date.length; i++){
          console.log(moment(x.busy_date[i]).format('YYYY-MM-DD') + ' ' + this.pickDate);
          // console.log(x.busy_date[i] + ' ' + this.pickDate);
          if (moment(x.busy_date[i]).format('YYYY-MM-DD') === this.pickDate){
            return false;
          }

        }
        return true;
      });
    }
    this.countResults = this.stylistDetails.length;
  }

  onSelect1(val) {
    this.a = true;
    this.stylistDetails = this.OriginalDetails;
    // console.log(val);
    // console.log(this.OriginalDetails);
    // this.stylistDetails = this.OriginalDetails.filter(x => {
    //   // console.log(x.address_line_1);
    //   return x.address_line_1 === val;
    // });
    // this.countResults = this.stylistDetails.length;
  }

  onSelect2(val) {
    this.b = true;
    this.stylistDetails = this.OriginalDetails;

    // console.log(val)
    // this.stylistDetails = this.OriginalDetails.filter(x => {
    //
    //   for (var i=0; i<x.skill.length; i++){
    //     // console.log(x.skill[i] + ' ' + val);
    //     if (x.skill[i] === val){
    //       return x.skill[i] === val;
    //     }
    //   }
    // });
    // // this.stylistDetails2 = this.stylistDetails;
    // this.countResults = this.stylistDetails.length;
  }

  onInputChange1(event: any) {
    this.sliderValue1 = event.value;
  }

  onInputChange2(event: any) {
    this.sliderValue2 = event.value;
  }



  onSelect3(val){
    this.c = true;
    this.stylistDetails = this.OriginalDetails;


    // console.log(val);
    // this.stylistDetails = this.OriginalDetails.filter(x => {
    //   return x.mrng_cost < val;
    // })
    // this.countResults = this.stylistDetails.length;
  }

  onSelect4(val){
    this.d = true;
    this.stylistDetails = this.OriginalDetails;

    // console.log(val);
    // this.stylistDetails = this.OriginalDetails.filter(x => {
    //   return x.evng_cost < val;
    // })
    // this.countResults = this.stylistDetails.length;
  }

  change(){
    this.sliderValue1 = 0;
    this.sliderValue2 = 0;
  }

  onPickDate(val){
    this.e =true;
    this.stylistDetails = this.OriginalDetails;

    this.pickDate = moment(val).format('YYYY-MM-DD');
    // this.stylistDetails = this.OriginalDetails.filter(x => {
    //
    //   for (var i=0; i<x.busy_date.length; i++){
    //     console.log(moment(x.busy_date[i]).format('YYYY-MM-DD') + ' ' + this.pickDate);
    //     // console.log(x.busy_date[i] + ' ' + this.pickDate);
    //     if (moment(x.busy_date[i]).format('YYYY-MM-DD') === this.pickDate){
    //       return false;
    //     }
    //
    //   }
    //   return true;
    // });
    // this.countResults = this.stylistDetails.length;
  }

  constructor(private  route: ActivatedRoute, private http: HttpClient) {

    // this.http.get<any>('/api/stylist_db/stylist_details').subscribe(
    //   data => {
    //     this.stylistDetails = data;
    //     // console.log(this.stylistName);
    //     // console.log(this.stylistName.length)  ;
    //     this.countResults = this.stylistDetails.length;
    //   }
    // );
  }

  ngOnInit() {

    this.route.queryParams.subscribe(value => {
      if (value.id) {
        this.id = value.id;
        // console.log(this.id);
        this.http.get<any>('/api/stylist_db/stylist_details/' + this.id).subscribe(
          data => {
            this.stylistDetails = data;
            this.OriginalDetails = data;
            // console.log(this.stylistDetails);
          }
        );
      }

      if (value.all == 'Find All the Available Stylists') {
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
            // console.log('Print my name :' + this.charlName);
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
    // console.log('Charles' + this.showMessage);
  }
}
