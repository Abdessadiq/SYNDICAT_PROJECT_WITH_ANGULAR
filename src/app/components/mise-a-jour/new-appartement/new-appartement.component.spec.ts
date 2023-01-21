import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppartementComponent } from './new-appartement.component';

describe('NewAppartementComponent', () => {
  let component: NewAppartementComponent;
  let fixture: ComponentFixture<NewAppartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAppartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
