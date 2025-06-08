import { Component, Input, Output, EventEmitter } from '@angular/core';
import { categoryLabels } from '../../../core/services/utils/category-labels';
import { CoreModule } from '../../../core/core.module';
import { Transaction } from '../../../core/interfaces/transaction.interface';

@Component({
  selector: 'app-recent-transactions-card',
  imports: [CoreModule],
  templateUrl: './recent-transactions-card.component.html',
  styleUrl: './recent-transactions-card.component.scss',
  standalone: true,
})
export class RecentTransactionsCardComponent {
  @Input() transactions: Transaction[] = [];
  @Output() deleteTransaction = new EventEmitter<string>();
  categoryLabels = categoryLabels;

  onDeleteTransaction(transactionId: string) {
    this.deleteTransaction.emit(transactionId);
  }
}
