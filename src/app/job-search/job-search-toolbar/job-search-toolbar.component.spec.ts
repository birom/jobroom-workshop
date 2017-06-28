import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSearchToolbarComponent } from './job-search-toolbar.component';

describe('JobSearchToolbarComponent', () => {
  let component: JobSearchToolbarComponent;
  let fixture: ComponentFixture<JobSearchToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSearchToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSearchToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
