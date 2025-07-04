import { Component, Input } from '@angular/core';
import { categoryLabels } from '../../../core/services/utils/category-labels';
import { CoreModule } from '../../../core/core.module';
import { HistoryItem } from '../../../core/interfaces/transaction.interface';

@Component({
  selector: 'app-history-chart-card',
  imports: [CoreModule],
  templateUrl: './history-chart-card.component.html',
  styleUrl: './history-chart-card.component.scss',
  standalone: true,
})
export class HistoryChartCardComponent {
  @Input() history: HistoryItem[] = [];
  categoryLabels = categoryLabels;
}
