/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashbanquerecepComponent } from './dashbanquerecep.component';

describe('DashbanquerecepComponent', () => {
  let component: DashbanquerecepComponent;
  let fixture: ComponentFixture<DashbanquerecepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbanquerecepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbanquerecepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
