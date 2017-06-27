import { Component, OnInit } from '@angular/core';
import {Toolbar} from './toolbar.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Toolbar: typeof Toolbar = Toolbar;
  toolbar: Toolbar;

  constructor() {
    this.toolbar = Toolbar.Jobs;
  }

  ngOnInit() {
  }

  select(toolbar: Toolbar): void {
    this.toolbar = toolbar;
  }
}
