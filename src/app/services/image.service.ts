import { Injectable } from '@angular/core';
import { Image, PLACES, NAMES, NAMES2, CONTACTS, SPONSORS } from '../shared/content';
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
  getContacts() {
    return CONTACTS;
  }
  getImageById(id: number): Image {
    return IMAGES.filter( (image) => image.id===id )[0];
  }
  getSponsors() {
    return SPONSORS;
  }
  
}
