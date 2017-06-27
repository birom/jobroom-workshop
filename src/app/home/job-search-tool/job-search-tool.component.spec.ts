import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSearchToolComponent } from './job-search-tool.component';

describe('JobSearchToolComponent', () => {
  let component: JobSearchToolComponent;
  let fixture: ComponentFixture<JobSearchToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSearchToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSearchToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
