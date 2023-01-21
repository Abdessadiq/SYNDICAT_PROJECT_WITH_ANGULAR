import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionImmeubleComponent } from './gestion-immeuble.component';

describe('GestionImmeubleComponent', () => {
  let component: GestionImmeubleComponent;
  let fixture: ComponentFixture<GestionImmeubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionImmeubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionImmeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
