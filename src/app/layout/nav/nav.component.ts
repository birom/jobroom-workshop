import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  megaMenuShown = false;
  navBarExpanded = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleMegaMenu() {
    this.megaMenuShown = !this.megaMenuShown;
  }

  toggleNavBar() {
    this.navBarExpanded = !this.navBarExpanded;
  }
}
