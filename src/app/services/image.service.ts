import { Injectable } from '@angular/core';
import { Image } from '../shared/image';
import { IMAGES } from '../shared/images';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImages(): Image[] {
    return IMAGES;
  }
}
