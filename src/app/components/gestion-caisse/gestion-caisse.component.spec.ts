import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCaisseComponent } from './gestion-caisse.component';

describe('GestionCaisseComponent', () => {
  let component: GestionCaisseComponent;
  let fixture: ComponentFixture<GestionCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCaisseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
