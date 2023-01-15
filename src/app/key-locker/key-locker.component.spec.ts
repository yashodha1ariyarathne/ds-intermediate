import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyLockerComponent } from './key-locker.component';

describe('KeyLockerComponent', () => {
  let component: KeyLockerComponent;
  let fixture: ComponentFixture<KeyLockerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyLockerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
