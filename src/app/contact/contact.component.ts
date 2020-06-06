import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts;
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.contacts = this.imageService.getContacts(); 
  }

}
