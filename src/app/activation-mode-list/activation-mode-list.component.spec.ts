import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationModeListComponent } from './activation-mode-list.component';

describe('ActivationModeListComponent', () => {
  let component: ActivationModeListComponent;
  let fixture: ComponentFixture<ActivationModeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationModeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationModeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
