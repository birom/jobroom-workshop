import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSearchRoutingModule } from './job-search-routing.module';
import { JobSearchComponent } from './job-search.component';
import { JobSearchToolbarComponent } from './job-search-toolbar/job-search-toolbar.component';
import { JobSearchFilterComponent } from './job-search-filter/job-search-filter.component';
import { JobSearchListComponent } from './job-search-list/job-search-list.component';
import { JobSearchListItemComponent } from './job-search-list-item/job-search-list-item.component';
import {JobService} from './job.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    JobSearchRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [JobSearchComponent, JobSearchToolbarComponent, JobSearchFilterComponent, JobSearchListComponent, JobSearchListItemComponent],
  providers: [JobService]
})
export class JobSearchModule { }
