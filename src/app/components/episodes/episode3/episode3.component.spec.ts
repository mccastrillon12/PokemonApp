import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Episode3Component } from './episode3.component';

describe('Episode3Component', () => {
  let component: Episode3Component;
  let fixture: ComponentFixture<Episode3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Episode3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Episode3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
