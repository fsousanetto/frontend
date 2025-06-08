import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HistoryChartCardComponent } from "./history-chart-card.component";

describe('HistoryChartCardComponent', () => {
  let component: HistoryChartCardComponent;
  let fixture: ComponentFixture<HistoryChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryChartCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
