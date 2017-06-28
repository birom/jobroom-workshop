import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ToolbarItemComponent} from './toolbar-item/toolbar-item.component';
import {ToolbarTitleComponent} from './toolbar-title/toolbar-title.component';
import {JobSearchToolComponent} from './job-search-tool/job-search-tool.component';
import {CandidateSearchToolComponent} from './candidate-search-tool/candidate-search-tool.component';
import { JobPublicationToolComponent } from './job-publication-tool/job-publication-tool.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HomeComponent, ToolbarComponent, ToolbarItemComponent, ToolbarTitleComponent, JobSearchToolComponent, CandidateSearchToolComponent, JobPublicationToolComponent]
})
export class HomeModule {
}
