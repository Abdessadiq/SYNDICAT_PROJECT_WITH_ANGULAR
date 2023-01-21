import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReglementComponent } from './gestion-reglement.component';

describe('GestionReglementComponent', () => {
  let component: GestionReglementComponent;
  let fixture: ComponentFixture<GestionReglementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionReglementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
