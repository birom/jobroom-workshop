import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../job';

@Component({
  selector: 'app-job-search-list',
  templateUrl: './job-search-list.component.html',
  styleUrls: ['./job-search-list.component.css']
})
export class JobSearchListComponent implements OnInit {
  @Input() jobs: Array<Job>;

  constructor() { }

  ngOnInit() {
  }

}
