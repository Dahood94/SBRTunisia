import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilrecepComponent } from './profilrecep.component';

describe('ProfilrecepComponent', () => {
  let component: ProfilrecepComponent;
  let fixture: ComponentFixture<ProfilrecepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilrecepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilrecepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
