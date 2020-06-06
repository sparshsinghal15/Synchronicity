import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  sponsors;
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.sponsors = this.imageService.getSponsors();
  }

}
