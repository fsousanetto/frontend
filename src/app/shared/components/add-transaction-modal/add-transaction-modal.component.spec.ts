import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransactionModalComponent } from './add-transaction-modal.component';

describe('AddTransactionModalComponent', () => {
  let component: AddTransactionModalComponent;
  let fixture: ComponentFixture<AddTransactionModalComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransactionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
