/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InscripinstituComponent } from './inscripinstitu.component';

describe('InscripinstituComponent', () => {
  let component: InscripinstituComponent;
  let fixture: ComponentFixture<InscripinstituComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripinstituComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripinstituComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
