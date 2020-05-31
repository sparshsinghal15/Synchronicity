import { Component, OnInit } from '@angular/core';
import { PLACES } from '../shared/places'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  places = PLACES;
  constructor() { }

  ngOnInit(): void {
  }

}
