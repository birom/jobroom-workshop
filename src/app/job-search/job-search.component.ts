import {Component, OnInit, ViewChild} from '@angular/core';
import {Job} from './job';
import {ActivatedRoute} from '@angular/router';
import {JobService} from './job.service';
import 'rxjs/Rx'
import {JobSearchToolbarComponent} from './job-search-toolbar/job-search-toolbar.component';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {
  @ViewChild(JobSearchToolbarComponent) toolbar;

  jobs: Array<Job> = [];

  constructor(private route: ActivatedRoute, private jobService: JobService) {
  }

  ngOnInit() {
    this.route.queryParams
      .map((params) => params['term'])
      .do(term => this.toolbar.term = term)
      .flatMap(term => this.jobService.search(term))
      .subscribe(jobs => {
        this.jobs = jobs;
      });
  }

}
