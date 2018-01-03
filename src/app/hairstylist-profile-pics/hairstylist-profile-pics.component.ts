import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hairstylist-profile-pics',
  templateUrl: './hairstylist-profile-pics.component.html',
  styleUrls: ['./hairstylist-profile-pics.component.css']
})
export class HairstylistProfilePicsComponent implements OnInit {
  pics: any[] = [];
  constructor() {
    this.pics = [
      { name: '../../assets/images/imgs/p1.jpg' },
      { name: '../../assets/images/imgs/p2.jpg' },
      { name: '../../assets/images/imgs/p3.jpg' },
      { name: '../../assets/images/imgs/p4.jpg' },
      { name: '../../assets/images/imgs/p5.jpg' },
    ];
  }

  ngOnInit() {
  }

}
