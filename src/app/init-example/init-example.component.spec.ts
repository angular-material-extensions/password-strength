import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InitExampleComponent } from './init-example.component';

describe('InitExampleComponent', () => {
  let component: InitExampleComponent;
  let fixture: ComponentFixture<InitExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InitExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
