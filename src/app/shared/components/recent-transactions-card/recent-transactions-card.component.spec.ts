import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTransactionsCardComponent } from './recent-transactions-card.component';

describe('RecentTransactionsCardComponent', () => {
  let component: RecentTransactionsCardComponent;
  let fixture: ComponentFixture<RecentTransactionsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentTransactionsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentTransactionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
