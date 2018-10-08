import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageEvaluationComponent } from './heritage-evaluation.component';

describe('HeritageEvaluationComponent', () => {
  let component: HeritageEvaluationComponent;
  let fixture: ComponentFixture<HeritageEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeritageEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeritageEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
