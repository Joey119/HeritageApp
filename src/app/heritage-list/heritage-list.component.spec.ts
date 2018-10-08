import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageListComponent } from './heritage-list.component';

describe('HeritageListComponent', () => {
  let component: HeritageListComponent;
  let fixture: ComponentFixture<HeritageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeritageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeritageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
