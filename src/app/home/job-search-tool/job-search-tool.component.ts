import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-search-tool',
  templateUrl: './job-search-tool.component.html',
  styleUrls: ['./job-search-tool.component.css']
})
export class JobSearchToolComponent implements OnInit {
  term: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/job-search'], { queryParams: { term: this.term }});
  }
}
