import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-search-toolbar',
  templateUrl: './job-search-toolbar.component.html',
  styleUrls: ['./job-search-toolbar.component.css']
})
export class JobSearchToolbarComponent implements OnInit {
  term: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/job-search'], { queryParams: { term: this.term }});
  }
}
