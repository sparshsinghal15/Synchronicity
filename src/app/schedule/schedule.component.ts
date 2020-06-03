import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  places;
  constructor(private imageSevice: ImageService) { }

  ngOnInit(): void {
    this.places = this.imageSevice.getPlaces();
  }

}
