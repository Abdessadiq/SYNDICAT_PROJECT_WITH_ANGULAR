import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAnnonceComponent } from './gestion-annonce.component';

describe('GestionAnnonceComponent', () => {
  let component: GestionAnnonceComponent;
  let fixture: ComponentFixture<GestionAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
