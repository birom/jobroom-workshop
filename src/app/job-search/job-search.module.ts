import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSearchRoutingModule } from './job-search-routing.module';
import { JobSearchComponent } from './job-search.component';

@NgModule({
  imports: [
    CommonModule,
    JobSearchRoutingModule
  ],
  declarations: [JobSearchComponent]
})
export class JobSearchModule { }
