import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageDetailComponent } from './heritage-detail.component';

describe('HeritageDetailComponent', () => {
  let component: HeritageDetailComponent;
  let fixture: ComponentFixture<HeritageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeritageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeritageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
