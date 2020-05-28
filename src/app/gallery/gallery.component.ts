import { Component, OnInit } from '@angular/core';
import { Image } from '../shared/image';
import { IMAGES } from '../shared/images'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = IMAGES;

  constructor() { }

  ngOnInit(): void {
  }

}
