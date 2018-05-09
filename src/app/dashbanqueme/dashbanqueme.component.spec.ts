/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashbanquemeComponent } from './dashbanqueme.component';

describe('DashbanquemeComponent', () => {
  let component: DashbanquemeComponent;
  let fixture: ComponentFixture<DashbanquemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbanquemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbanquemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
