import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSearchToolComponent } from './candidate-search-tool.component';

describe('CandidateSearchToolComponent', () => {
  let component: CandidateSearchToolComponent;
  let fixture: ComponentFixture<CandidateSearchToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateSearchToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSearchToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
