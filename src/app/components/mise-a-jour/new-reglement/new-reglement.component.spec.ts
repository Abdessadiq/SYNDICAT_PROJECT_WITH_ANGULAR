import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReglementComponent } from './new-reglement.component';

describe('NewReglementComponent', () => {
  let component: NewReglementComponent;
  let fixture: ComponentFixture<NewReglementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReglementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
