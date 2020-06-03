import { Injectable } from '@angular/core';
import { Image, PLACES, NAMES, NAMES2 } from '../shared/content';
import { IMAGES } from '../shared/content';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImages(): Image[] {
    return IMAGES;
  }
  getPlaces() {
    return PLACES;
  }
  getNames() {
    return NAMES;
  }
  getNames2() {
    return NAMES2;
  }
}
