import { Component, OnInit } from '@angular/core';
import { Image } from '../shared/content';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Image[];
  selectedImage;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.images = this.imageService.getImages();
  }
  onSelect (image: Image) {
    this.selectedImage = image;
  }
  unSelect () {
    this.selectedImage = false;
  }

}
