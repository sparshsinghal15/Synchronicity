import { Injectable } from '@angular/core';

class Image {
  id: number;
  name: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  IMAGES: Image[] = [
    {
      id: 1,
      name: "2.jfif",
      title: "City"
    },
    {
        id: 2,
      name: "3.jpeg",
      title: "Perspective"
    },
    {
        id: 3,
      name: "4.jfif",
      title: "Hidden Horcrux"
    }
  ]
  
  PLACES = [
    {name: "Kanpur", status: "27th October 2020"},
    {name: "Mumbai", status: "To be announced soon"},
    {name: "Delhi", status: "To be announced soon"}
  ]
  
  NAMES = [
    {
        col1: "Member 1",
        col2: "Member 2"
    },
    {
        col1: "Member 3",
        col2: "Memmber 4"
    },
    {
        col1: "Member 5",
        col2: "Member 6"
    },
    {
        col1: "Contact No.",
        col2: "Alternate No."
    }
  ]
  
  NAMES2 = [
    {
        name: "Songs Link",
        placeholder: "http://myveryawesomesong.com"
    },
    {
        name: "More Songs Link",
        placeholder: "http://myveryawesomesong.com"
    },
    {
        name: "Facebook Link",
        placeholder: "https://www.facebook.com/synchronicity.iitk"
    },
    {
        name: "Other Links",
        placeholder: ""
    }
  ]
  
  CONTACTS = [
    {
        image: "6.jpg",
        name: "Frodo Baggins",
        number: "0000000000",
        email: "abc@iitk.ac.in"
    },
    {
        image: "7.jpg",
        name: "Sherlock Holmes",
        number: "1111111111",
        email: "pqr@iitk.ac.in"
    },
    {
        image: "8.jfif",
        name: "Leonardo DiCaprio",
        number: "22222222222",
        email: "xyz@iitk.ac.in" 
    },
    {
      image: "6.jpg",
      name: "Frodo Baggins",
      number: "0000000000",
      email: "abc@iitk.ac.in"
  } 
  ]
  
  SPONSORS = [
    {
        logo: "10.svg",
        description: "sponsored by",
        title: "Apple" 
    },
    {
        logo: "11.png",
        description: "powered by",
        title: "ferrari"
    },
    {
        logo: "12.png",
        description: "copowered by",
        title: "MDH"
    },
    {
        logo: "13.svg",
        description: "presented by",
        title: "Adobe"
    }
  ]
  constructor() { }

  getImages(): Image[] {
    return this.IMAGES;
  }
  getPlaces() {
    return this.PLACES;
  }
  getNames() {
    return this.NAMES;
  }
  getNames2() {
    return this.NAMES2;
  }
  getContacts() {
    return this.CONTACTS;
  }
  getImageById(id: number): Image {
    return this.IMAGES.filter( (image) => image.id===id )[0];
  }
  getSponsors() {
    return this.SPONSORS;
  }
  
}
