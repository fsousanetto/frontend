import { Component, Input } from '@angular/core';
import { CoreModule } from '../../../core/core.module';

@Component({
  selector: 'app-total-expense-card',
  imports: [CoreModule],
  templateUrl: './total-expense-card.component.html',
  styleUrl: './total-expense-card.component.scss',
  standalone: true
})
export class TotalExpenseCardComponent {
  @Input() totalExpense: number = 0;
  @Input() loading: boolean = false;

  get formattedExpense(): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(this.totalExpense || 0);
  }
}
