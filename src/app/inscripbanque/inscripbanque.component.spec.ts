/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InscripbanqueComponent } from './inscripbanque.component';

describe('InscripbanqueComponent', () => {
  let component: InscripbanqueComponent;
  let fixture: ComponentFixture<InscripbanqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripbanqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripbanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
