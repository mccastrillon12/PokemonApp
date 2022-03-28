import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Episode1Component } from './episode1.component';

describe('Episode1Component', () => {
  let component: Episode1Component;
  let fixture: ComponentFixture<Episode1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Episode1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Episode1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
