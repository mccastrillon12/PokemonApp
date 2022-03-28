import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Episode2Component } from './episode2.component';

describe('Episode2Component', () => {
  let component: Episode2Component;
  let fixture: ComponentFixture<Episode2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Episode2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Episode2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
