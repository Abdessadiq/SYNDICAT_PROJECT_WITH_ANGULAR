import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAppartementComponent } from './gestion-appartement.component';

describe('GestionAppartementComponent', () => {
  let component: GestionAppartementComponent;
  let fixture: ComponentFixture<GestionAppartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAppartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
