import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'home-app',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})

export class HomeComponent implements OnInit {
  images: Array<string>;
  count: number = 0;
  reloadCount: number = 5;
  imageSRC: string = '';

  constructor(private router: Router, private dataService: DataService) {
    this.ngOnInit();
    this.imageSRC = this.images[this.count];
    // console.log(this.images);
    this.timer();
    this.timerRedirect();
  }

  ngOnInit() {
    this.images = this.dataService.getData();
  }

  timer() {
    setInterval(() => {
      this.count++;
      if (this.count > 2) this.count = 0;
      this.imageSRC = this.images[this.count];
      // console.log(this.count);
    }, 2500);
  };

  timerRedirect() {
    setInterval(() => {
      this.reloadCount--;
      // console.log(this.reloadCount);
      if (this.reloadCount == 1) this.redirectToNewPage();
    }, 1000);
  };

  redirectToNewPage() {
    this.router.navigate(['random-content']);
  };

  counterDec() {
    this.count--;
    if (this.count < 0) this.count = 2;
    this.imageSRC = this.images[this.count];
    // console.log(this.count);
  };

  counterInc() {
    this.count++;
    if (this.count > 2) this.count = 0;
    this.imageSRC = this.images[this.count];
    // console.log(this.count);
  };

}
