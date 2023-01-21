import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewImmeubleComponent } from './new-immeuble.component';

describe('NewImmeubleComponent', () => {
  let component: NewImmeubleComponent;
  let fixture: ComponentFixture<NewImmeubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewImmeubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewImmeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
