import { Component, OnInit } from '@angular/core';
import {Job} from './job';
import {ActivatedRoute} from '@angular/router';
import {JobService} from './job.service';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {
  jobs: Array<Job>;

  constructor(private route: ActivatedRoute, private jobService: JobService) {
  }

  ngOnInit() {
    this.route.queryParams
      .map((params) => params['term'])
      .subscribe(term => {
        this.jobService.search(term)
          .subscribe(jobs => this.jobs = jobs);
      });
  }

}
