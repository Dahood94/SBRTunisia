/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashreceptriceComponent } from './dashreceptrice.component';

describe('DashreceptriceComponent', () => {
  let component: DashreceptriceComponent;
  let fixture: ComponentFixture<DashreceptriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashreceptriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashreceptriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
