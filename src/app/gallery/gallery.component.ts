import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

class Image {
  id: number;
  name: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Image[];
  selectedImage: Image;
  currentImage: Image;
  removeClass = false;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.images = this.imageService.getImages();
  }
  onSelect (imageId: number) {
    this.removeClass = false;
    this.selectedImage = this.imageService.getImageById(imageId);
    this.currentImage.id = this.selectedImage.id;
  }
  unSelect () {
    this.removeClass = true;
  }
  forward(){
    if(this.selectedImage.id < 3){
      this.currentImage.id = this.selectedImage.id + 1;
    }
    this.onSelect(this.currentImage.id);
  }
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "touchMove": true
  };

}
