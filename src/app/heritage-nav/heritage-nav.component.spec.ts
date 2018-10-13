import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageNavComponent } from './heritage-nav.component';

describe('HeritageNavComponent', () => {
  let component: HeritageNavComponent;
  let fixture: ComponentFixture<HeritageNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeritageNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeritageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
