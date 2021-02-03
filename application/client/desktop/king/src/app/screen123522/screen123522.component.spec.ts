import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen123522Component } from './screen123522.component';

describe('Screen123522Component', () => {
  let component: Screen123522Component;
  let fixture: ComponentFixture<Screen123522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen123522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen123522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});