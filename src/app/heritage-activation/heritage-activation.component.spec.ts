import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageActivationComponent } from './heritage-activation.component';

describe('HeritageActivationComponent', () => {
  let component: HeritageActivationComponent;
  let fixture: ComponentFixture<HeritageActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeritageActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeritageActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
