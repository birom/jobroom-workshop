import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-job-search-list-item',
  templateUrl: './job-search-list-item.component.html',
  styleUrls: ['./job-search-list-item.component.css']
})
export class JobSearchListItemComponent implements OnInit {
  @Input() job;

  constructor() {
  }

  ngOnInit() {
  }

}
