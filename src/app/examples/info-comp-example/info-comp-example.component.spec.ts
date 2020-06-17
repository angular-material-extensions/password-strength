import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCompExampleComponent } from './info-comp-example.component';

describe('InfoCompExampleComponent', () => {
  let component: InfoCompExampleComponent;
  let fixture: ComponentFixture<InfoCompExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCompExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCompExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
