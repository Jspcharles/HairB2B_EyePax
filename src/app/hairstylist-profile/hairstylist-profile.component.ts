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
  county;

  items: Array<any> = [];
  constructor(private  route: ActivatedRoute) {

  }


  ngOnInit() {
  }
}
