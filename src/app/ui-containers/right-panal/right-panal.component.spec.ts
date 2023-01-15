import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanalComponent } from './right-panal.component';

describe('RightPanalComponent', () => {
  let component: RightPanalComponent;
  let fixture: ComponentFixture<RightPanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
