import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  names;
  names2;
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.names = this.imageService.getNames();
    this.names2 = this.imageService.getNames2();
  }

}
