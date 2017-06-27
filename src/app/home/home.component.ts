import {Component, OnInit} from '@angular/core';
import {Toolbar} from './toolbar.enum';
import {Tab} from './tab.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Toolbar: typeof Toolbar = Toolbar;
  toolbar: Toolbar;

  Tab: typeof Tab = Tab;
  tab: Tab;

  constructor() {
    this.toolbar = Toolbar.Jobs;
    this.tab = Tab.CandidateSearch
  }

  ngOnInit() {
  }

  select(toolbar: Toolbar): void {
    this.toolbar = toolbar;
  }

  selectTab(tab: Tab): void {
    this.tab = tab;
  }
}
