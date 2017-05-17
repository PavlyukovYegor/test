import { Component, OnInit } from '@angular/core';
// import { HomeComponent } from '../home/home.component'
import { DataService } from '../services/data.service';

@Component({
  selector: 'randomcontent-app',
  templateUrl: 'randomcontent.component.html',
  styleUrls: ['./randomcontent.component.css'],
  providers: [DataService]
})
export class RandomContentComponent implements OnInit {

  images: Array<string>;

  constructor(private dataService: DataService ){}

  ngOnInit() {
    this.images = this.dataService.getData();
  }
}
