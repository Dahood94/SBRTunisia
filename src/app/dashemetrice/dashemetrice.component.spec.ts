/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashemetriceComponent } from './dashemetrice.component';

describe('DashemetriceComponent', () => {
  let component: DashemetriceComponent;
  let fixture: ComponentFixture<DashemetriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashemetriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashemetriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
