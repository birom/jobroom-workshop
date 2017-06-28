import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSearchListItemComponent } from './job-search-list-item.component';

describe('JobSearchListItemComponent', () => {
  let component: JobSearchListItemComponent;
  let fixture: ComponentFixture<JobSearchListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSearchListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSearchListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
