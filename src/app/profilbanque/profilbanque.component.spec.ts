import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilbanqueComponent } from './profilbanque.component';

describe('ProfilbanqueComponent', () => {
  let component: ProfilbanqueComponent;
  let fixture: ComponentFixture<ProfilbanqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilbanqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilbanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
