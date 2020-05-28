import { Component, OnInit } from '@angular/core';

var navbar = document.getElementById("navbar");


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }
  myFunction() {
    var stick: number = navbar.offsetTop;
    if (window.pageYOffset  >= stick) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

}
