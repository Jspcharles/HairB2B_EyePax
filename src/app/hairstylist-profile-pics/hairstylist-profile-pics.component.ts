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
      { name: 'assets/images/image1.jpg' },
      { name: 'assets/images/image2.jpg' },
      { name: 'assets/images/image3.jpg' },
      { name: 'assets/images/image4.jpg' },
    ];
  }

  ngOnInit() {
  }

}
