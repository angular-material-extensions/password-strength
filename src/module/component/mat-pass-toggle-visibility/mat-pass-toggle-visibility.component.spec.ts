import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {MatPassToggleVisibilityComponent} from './mat-pass-toggle-visibility.component';
import {MatIconModule} from '@angular/material';

describe('MatPassToggleVisibilityComponent', () => {
  let component: MatPassToggleVisibilityComponent;
  let fixture: ComponentFixture<MatPassToggleVisibilityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [MatPassToggleVisibilityComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPassToggleVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
