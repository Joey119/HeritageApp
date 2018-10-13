import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageAnalysisComponent } from './heritage-analysis.component';

describe('HeritageAnalysisComponent', () => {
  let component: HeritageAnalysisComponent;
  let fixture: ComponentFixture<HeritageAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeritageAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeritageAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
