import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCaisseComponent } from './new-caisse.component';

describe('NewCaisseComponent', () => {
  let component: NewCaisseComponent;
  let fixture: ComponentFixture<NewCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCaisseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
