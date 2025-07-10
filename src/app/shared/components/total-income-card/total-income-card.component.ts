import { Component, Input } from '@angular/core';
import { CoreModule } from '../../../core/core.module';

@Component({
  selector: 'app-total-income-card',
  imports: [CoreModule],
  templateUrl: './total-income-card.component.html',
  styleUrl: './total-income-card.component.scss',
  standalone: true
})
export class TotalIncomeCardComponent {
  @Input() totalIncome: number = 0;
  @Input() loading: boolean = false;

  get formattedIncome(): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(this.totalIncome || 0);
  }
}
